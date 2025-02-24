import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    doctors: [Doctor]
  }

  type Doctor {
    name: String
    speciality: Speciality
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;