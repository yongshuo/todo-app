import {Actions} from '../actions'

const TODO_APP_NOTIFICATIONS = {
  loadTodoFailure: {
    index: 0,
    level: 'danger',
    message: 'Failed to fetch your todo list, please try again later.'
  },
  addTodoSuccess: {
    index: 1,
    level: 'success',
    message: 'Your todo has been added successfully.'
  },
  addTodoFailure: {
    index: 2,
    level: 'danger',
    message: 'Failed to add your todo, please try again later.'
  },
  toggleTodoFailure: {
    index: 3,
    level: 'danger',
    message: 'Failed to check/uncheck your todo, please check again later.'
  }
}

export function todoListNotification(state = [], action) {
  switch (action.type) {
  case Actions.LOAD_TODO_FAILURE:
    return [
      ...state,
      TODO_APP_NOTIFICATIONS.loadTodoFailure
    ]
  case Actions.TOGGLE_TODO_FAILURE:
    return [
      ...state,
      TODO_APP_NOTIFICATIONS.toggleTodoFailure
    ]
  case Actions.CLEAR_NOTIFICATION:
    return state.map(noti => {
      if (noti.index != action.index) {
        return Object.assign({}, noti)
      }
    })
  case Actions.LOAD_TODO_LIST:
  case Actions.LOAD_TODO_LIST_SUCCESS:
    return state.map(noti => {
      if (noti.index != TODO_APP_NOTIFICATIONS.loadTodoFailure.index) {
        return Object.assign({}, noti)
      }
    })
  case Actions.TOGGLE_TODO:
  case Actions.TOGGLE_TODO_SUCCESS:
    return state.map(noti => {
      if (noti.index != TODO_APP_NOTIFICATIONS.toggleTodoFailure.index) {
        return Object.assign({}, noti)
      }
    })
  default:
    return state
  }
}

export function addTodoNotification(state = [], action) {
  switch (action.type) {
  case Actions.ADD_TODO_SUCCESS:
    return [
      ...state,
      TODO_APP_NOTIFICATIONS.addTodoSuccess
    ]
  case Actions.ADD_TODO_FAILURE:
    return [
      ...state,
      TODO_APP_NOTIFICATIONS.addTodoFailure
    ]
  case Actions.ADD_TODO:
    return state.map(noti => {
      if (noti.index != TODO_APP_NOTIFICATIONS.addTodoSuccess.index &&
          noti.index != TODO_APP_NOTIFICATIONS.addTodoFailure.index
      ) {
        return Object.assign({}, noti)
      }
    })
  case Actions.CLEAR_NOTIFICATION:
    return state.map(noti => {
      if (noti.index != action.index) {
        return Object.assign({}, noti)
      }
    })
  default:
    return state
  }
}
