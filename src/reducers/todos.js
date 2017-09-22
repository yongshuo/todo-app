import {Actions} from '../actions'
import {combineReducers} from 'redux'
import {cloneTodoList} from '../utils/TodoHelper'

export function todoList(state = {}, action) {
  let clone = {}
  switch (action.type) {
  case Actions.LOAD_TODO_LIST_SUCCESS:
    return action.todoList
  case Actions.ADD_TODO_SUCCESS:
    clone = cloneTodoList(state)
    clone[action.key].push(action.todo)

    return clone
  case Actions.TOGGLE_TODO_SUCCESS:
    clone = cloneTodoList(state)
    clone[action.key][action.index].completed = !state[action.key][action.index].completed

    return clone
  default:
    return state
  }
}
