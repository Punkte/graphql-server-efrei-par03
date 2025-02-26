import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";

type CatstronautMutations = WithRequired<MutationResolvers, 'incrementNumberOfLikes' | 'incrementTrackView'>;

export const catstronautMutations: CatstronautMutations = {
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
}