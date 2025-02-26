import { QueryResolvers } from "../../types.js"
import { getClosestColor } from "../../utils/colors.js"
import { WithRequired } from "../../utils/mapped-types"

type OperationResolvers = WithRequired<QueryResolvers, 'add' | 'divide' | 'multiply' | 'substract' | 'closestColor'>

export const operationsQueries: OperationResolvers = {
  add: (_, {number1, number2}) => number1 + number2,
  substract: (_, {number1, number2}) => number1 - number2,
  multiply: (_, {number1, number2}) => number1 * number2,
  divide: (_, {number1, number2}) => {
    if (number2 === 0) {
      throw new Error('cannot divide by 0')
    }

    return number1 / number2
  },
  closestColor: (_, {hexa}) => {
    if (!(hexa.match(/^#[0-9a-fA-F]{6}/))) {
      throw new Error('Provided hexa is not valid')
    }
    return getClosestColor(hexa, ["#FF5733", "#33FF57", "#3357FF"]);
  },
}