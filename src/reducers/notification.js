import {Actions} from '../actions'

const TODO_APP_NOTIFICATIONS = {
  loadTodoFailure: {level: 'danger', message: 'Failed to fetch your todo list, please try again later.'},
  addTodoSuccess: {level: 'success', message: 'Your todo has been added successfully.'},
  addTodoFailure: {level: 'danger', message: 'Failed to add your todo, please try again later.'},
  toggleTodoFailure: {level: 'danger', message: 'Failed to check/uncheck your todo, please check again later.'}
}

export function todoListNotification(state = {}, action) {
  switch (action.type) {
  case Actions.LOAD_TODO_FAILURE:
    return TODO_APP_NOTIFICATIONS.loadTodoFailure
  case Actions.TOGGLE_TODO_FAILURE:
    return TODO_APP_NOTIFICATIONS.toggleTodoFailure
  case Actions.CLEAR_NOTIFICATION:
  case Actions.LOAD_TODO_LIST:
  case Actions.LOAD_TODO_LIST_SUCCESS:
  case Actions.TOGGLE_TODO:
  case Actions.TOGGLE_TODO_SUCCESS:
    return {}
  default:
    return state
  }
}

export function addTodoNotification(state = {}, action) {
  switch (action.type) {
  case Actions.ADD_TODO_SUCCESS:
    return TODO_APP_NOTIFICATIONS.addTodoSuccess
  case Actions.ADD_TODO_FAILURE:
    return TODO_APP_NOTIFICATIONS.addTodoFailure
  case Actions.ADD_TODO:
  case Actions.CLEAR_NOTIFICATION:
    return {}
  default:
    return state
  }
}
