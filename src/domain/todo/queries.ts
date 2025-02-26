import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type TodoQueries = WithRequired<QueryResolvers, 'getTodoList'>

export const todoQueries: TodoQueries = { 
  getTodoList: async (_, {id}, {user, dataSources: {db}}) => {
    try {
      if (!user) return null
  
      const todoList = db.todoList.findFirstOrThrow({
        where: {userId: user.id, id}
      })

      return todoList
    } catch {
      console.error('todoList not found')
      return null
    }
  }
}
