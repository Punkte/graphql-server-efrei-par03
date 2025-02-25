import { createUser } from "./mutations/users/createUser.js";
import { Resolvers, Speciality } from "./types.js";
import { getClosestColor } from "./utils/colors.js";

const doctorsData = [
  {
    name: 'Samia Mekame',
    speciality: Speciality.Ophtalmologist,
  },
  {
    name: 'Catherine Bedoy',
    speciality: Speciality.Psychologist,
  },
];



export const resolvers: Resolvers = {
  Query: {
    doctors: (_, {specialities}) => specialities ? doctorsData.filter(doctor => specialities.includes(doctor.speciality)) : doctorsData,
    add: (_, {number1, number2}) => number1 + number2,
    substract: (_, {number1, number2}) => number1 - number2,
    multiply: (_, {number1, number2}) => number1 * number2,
    divide: (_, {number1, number2}) => {
      if (number2 === 0) {
        throw new Error('cannot divide by 0')
      }

      return number1 / number2
    },
    closestColor: (_, {hexa}) => {
      if (!(hexa.match(/^#[0-9a-fA-F]{6}/))) {
        throw new Error('Provided hexa is not valid')
      }
      return getClosestColor(hexa, ["#FF5733", "#33FF57", "#3357FF"]);
    },
    getTracks: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracks()
    },
    getFilms: (_, __, {dataSources: {ghibliAPI}}) => ghibliAPI.getFilms(),
    getPeople: (_, __, {dataSources: {ghibliAPI}}) => ghibliAPI.getPeople(),
  },
  Mutation: {
    incrementTrackView: async (_, {id}, {dataSources: {trackAPI}}) => {
      try {
        const track = await trackAPI.incrementTrackViews(id);
        const message = `incrementTrackViews successful! `

  
        return {
          code: 200,
          message,
          success: true,
          track
        }
      } catch {
        return {
          code: 304,
          message: 'trackViews not incremented',
          success: false,
          track: null
        }
      }
    },
    incrementNumberOfLikes: async (_, {id}, {dataSources: {trackAPI}}) => {
      try {
        const track = await trackAPI.incrementNumberOfLikes(id);
        const message = `incrementNumberOfLikes successful! `
  
        return {
          code: 200,
          message,
          success: true,
          track
        }
      } catch {
        return {
          code: 304,
          message: 'numberOfLikes not incremented',
          success: false,
          track: null
        }
      }
    },
    createUser,
  },
  Track: {
    author: (parent, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthorBy(parent.authorId)
    }
  },
  Film: {
    people: ({people}, _, {dataSources: {ghibliAPI}}) => ghibliAPI.getPeopleByUrls(people),
  },
  People: {
    eyeColor: ({eye_color}) => eye_color,
    films: ({films}, _, {dataSources: {ghibliAPI}}) => ghibliAPI.getFilmsByUrls(films)
  }
}