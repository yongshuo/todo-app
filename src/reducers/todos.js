import {Actions} from '../actions'
import {combineReducers} from 'redux'

export function todoList(state = [], action) {
  switch (action.type) {
  case Actions.LOAD_TODO_LIST_SUCCESS:
    return action.todoList
  case Actions.ADD_TODO_SUCCESS:
    return [
      ...state,
      action.todo
    ]
  case Actions.TOGGLE_TODO_SUCCESS:
    return state.map(todo => {
      if (todo.uniqueId == action.uniqueId) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  case Actions.DELETE_TODO_SUCCESS:
    return state.slice().filter(todo =>
      !action.uniqueIds.includes(todo.uniqueId)
    )
  default:
    return state
  }
}
