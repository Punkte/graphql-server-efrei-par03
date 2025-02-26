import { TrackResolver } from "./domain/catstronaut/models.js";
import { catstronautMutations } from "./domain/catstronaut/mutations.js";
import { catstronautQueries } from "./domain/catstronaut/queries.js";
import { doctorQueries } from "./domain/doctors/queries.js";
import { FilmResolver, PeopleResolver } from "./domain/ghibli/models.js";
import { ghibliQueries } from "./domain/ghibli/queries.js";
import { operationsQueries } from "./domain/operations/queries.js";
import { userMutations } from "./domain/user/mutations.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    ...doctorQueries,
    ...operationsQueries,
    ...catstronautQueries,
    ...ghibliQueries,
  },
  Mutation: {
    ...catstronautMutations,
    ...userMutations
  },
  Track: TrackResolver,
  Film: FilmResolver,
  People: PeopleResolver
}