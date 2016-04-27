import { combineReducers } from 'redux'
import { PLUS_ONE, SUBTRACT_ONE } from './actions'

function counter(state = 0, action) {
  switch (action.type) {
    case PLUS_ONE:
      // if (!action.number) {
        return ++state
      // }
      // return state + action.number
    case SUBTRACT_ONE:
      // if (!action.number) {
        return --state
      // }
      // return state - action.number
    default:
      return state
  }
}

const counterApp = combineReducers({
  counter
})

export default counterApp
