import {Actions} from '../actions'
import {combineReducers} from 'redux'

export function todoList(state = [], action) {
  switch (action.type) {
  case Actions.ADD_TODO:
    return [
      ...state,
      action.todo
    ]
  case Actions.TOGGLE_TODO:
    return state.map(todo => {
      if (todo.uniqueId == action.uniqueId) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  case Actions.DELETE_TODO:
    return state.slice().filter(todo =>
      !action.uniqueIds.includes(todo.uniqueId)
    )
  case Actions.UPDATE_TODO:
    return state.map(todo => {
      if (todo.uniqueId == action.todo.uniqueId) {
        return Object.assign({}, todo, {
          dueTime: action.todo.dueTime,
          text: action.todo.text
        })
      }
      return todo
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  todoList
})

export default rootReducer
