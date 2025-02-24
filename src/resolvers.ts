import { getClosestColor } from "./utils/colors.js";

const doctorsData = [
  {
    name: 'Samia Mekame',
    speciality: 'OPHTALMOLOGIST' as const,
  },
  {
    name: 'Catherine Bedoy',
    speciality: 'PSYCHOLOGIST' as const,
  },
];


type Speciality = 'PSYCHOLOGIST' | 'OPHTALMOLOGIST'

export const resolvers = {
  Query: {
    doctors: (_: unknown, {specialities}: {specialities?: Speciality[]}) => specialities ? doctorsData.filter(doctor => specialities.includes(doctor.speciality)) : doctorsData,
    add: (_: unknown, {number1, number2}: {number1: number, number2: number}) => number1 + number2,
    substract: (_: unknown, {number1, number2}: {number1: number, number2: number}) => number1 - number2,
    multiply: (_: unknown, {number1, number2}: {number1: number, number2: number}) => number1 * number2,
    divide: (_: unknown, {number1, number2}: {number1: number, number2: number}) => {
      if (number2 === 0) {
        throw new Error('cannot divide by 0')
      }

      return number1 / number2
    },
    closestColor: (_: unknown, {hexa}: {hexa: string}) => {
      if (!(hexa.match(/^#[0-9a-fA-F]{6}/))) {
        throw new Error('Provided hexa is not valid')
      }
      return getClosestColor(hexa, ["#FF5733", "#33FF57", "#3357FF"]);
    }
  }
}