import { QueryResolvers } from "../../types.js"
import { WithRequired } from "../../utils/mapped-types"

type CatstronautQueries = WithRequired<QueryResolvers, 'getTracks'>

export const catstronautQueries: CatstronautQueries = {
  getTracks: (_, __, {dataSources}) => {
    return dataSources.trackAPI.getTracks()
  },
}