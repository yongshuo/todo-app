import {Actions} from '../actions'
import {combineReducers} from 'redux'

/**
* {
*   date1: [],
*   date2: []
* }
*
*/
function todoListLoading(state = false, action) {
  switch (action.type) {
  case Actions.LOAD_TODO_LIST:
    return true
  case Actions.LOAD_TODO_LIST_FAILURE:
  case Actions.LOAD_TODO_LIST_SUCCESS:
    return false
  default:
    return state
  }
}

function todoListLoadFailure(state = false, action) {
  switch (action.type) {
  case Actions.LOAD_TODO_LIST_FAILURE:
    return true
  case Actions.LOAD_TODO_LIST:
  case Actions.LOAD_TODO_LIST_SUCCESS:
    return false
  default:
    return state
  }
}

function addingTodo(state = false, action) {
  switch (action.type) {
  case Actions.ADD_TODO:
    return true
  case Actions.ADD_TODO_SUCCESS:
  case Actions.ADD_TODO_FAILURE:
    return false
  default:
    return state
  }
}

function addTodoFailure(state = false, action) {
  switch (action.type) {
  case Actions.ADD_TODO_FAILURE:
    return true
  case Actions.ADD_TODO:
  case Actions.ADD_TODO_SUCCESS:
    return false
  default:
    return state
  }
}

function togglingTodo(state = false, action) {
  switch (action.type) {
  case Actions.TOGGLE_TODO:
    return true
  case Actions.TOGGLE_TODO_SUCCESS:
  case Actions.TOGGLE_TODO_FAILURE:
    return false
  default:
    return state
  }
}

function toggleTodoFailure(state = false, action) {
  switch (action.type) {
  case Actions.TOGGLE_TODO_FAILURE:
    return true
  case Actions.TOGGLE_TODO:
  case Actions.TOGGLE_TODO_SUCCESS:
    return false
  default:
    return state
  }
}

function todoList(state = [{text: 'TODO 1', completed: false}], action) {
  switch (action.type) {
  case Actions.LOAD_TODO_LIST_SUCCESS:
    return action.todoList
  case Actions.ADD_TODO_SUCCESS:
    return [
      ...state,
      action.todo
    ]
  case Actions.TOGGLE_TODO_SUCCESS:
    return state.map((todo, index) => {
      if (index == action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  todoListLoading,
  todoListLoadFailure,
  addingTodo,
  addTodoFailure,
  togglingTodo,
  toggleTodoFailure,
  todoList
})

export default rootReducer
