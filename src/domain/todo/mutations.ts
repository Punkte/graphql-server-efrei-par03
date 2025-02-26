import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type TodoMutations = WithRequired<MutationResolvers, 'createTodo'>

const createTodo: MutationResolvers['createTodo'] = async (
  _,
  {name},
  {user, dataSources: {db}}
) => {
  try {
    if (!user) throw new Error('User is not provided')
    const createdTodo = await db.todoList.create({
      data: {
        name,
        userId: user.id
      }
    })
  
    return {
      code: 201,
      message: 'todo has been created',
      success: true,
      todoList: createdTodo
    }
  } catch(e) {
    if (e instanceof Error) {
      return {
        code: 400,
        message: 'todo has not been created',
        success: false,
        todoList: null
      }
    }
    return {
      code: 400,
      message: 'todo has not been created',
      success: false,
      todoList: null
    }
  }
}

export const todoMutations: TodoMutations = { createTodo }