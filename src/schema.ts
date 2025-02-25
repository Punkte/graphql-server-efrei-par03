import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    doctors(specialities: [Speciality!]): [Doctor]
    add(number1: Float!, number2: Float!): Float!
    substract(number1: Float!, number2: Float!): Float!
    multiply(number1: Float!, number2: Float!): Float!
    divide(number1: Float!, number2: Float!): Float
    closestColor(hexa: String!): String
    getTracks: [Track!]!
    getFilms: [Film]!
    getPeople: [People]!
  }

  type Mutation {
    incrementTrackView(id: ID!): IncrementTrackViewReponse!
    incrementNumberOfLikes(id: ID!): IncrementNumberOfLikesReponse!
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
  }

  type IncrementTrackViewReponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type IncrementNumberOfLikesReponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
  type SignInResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }

  type User {
    id: ID!
    username: String!
  }

  type Track {
    id: ID!
    thumbnail: String!
    title: String!
    description: String!
    author: Author
    numberOfViews: Int
    numberOfLikes: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String!
  }

  type Doctor {
    name: String
    speciality: Speciality
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }

  type Film {
    id: ID
    title: String
    people: [People]!
  }

  type People {
    id: ID
    name: String
    eyeColor: String
    films: [Film]!
  }
`;