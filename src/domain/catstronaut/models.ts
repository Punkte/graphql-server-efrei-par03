import { Resolvers } from "../../types.js";

export const TrackResolver: Resolvers['Track'] = {
  author: (parent, _, {dataSources}) => {
    return dataSources.trackAPI.getAuthorBy(parent.authorId)
  }
}