import {combineReducers} from 'redux'
import {
  todoListNotification,
  addTodoNotification
} from './notification'
import {
  todoList
} from './todos'

const rootReducer = combineReducers({
  todoListNotification,
  addTodoNotification,
  todoList
})

export default rootReducer
