import { Resolvers } from "../../types.js"

export const TodoListResolver: Resolvers['TodoList'] = {
  todoItems: ({id}, _, {dataSources}) => {
    return dataSources.db.todoItem.findMany({where: {todoListId: id}})
  },
  user: ({userId}, _, {dataSources}) => {
    return dataSources.db.user.findFirstOrThrow({where: {id: userId}})
  }
}