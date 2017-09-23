export const Actions = {
  LOAD_TODO_LIST: 'LOAD_TODO_LIST',
  LOAD_TODO_LIST_SUCCESS: 'LOAD_TODO_LIST_SUCCESS',
  LOAD_TODO_LIST_FAILURE: 'LOAD_TODO_LIST_FAILURE',
  ADD_TODO: 'ADD_TODO',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  ADD_TODO_FAILURE: 'ADD_TODO_FAILURE',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TOGGLE_TODO_SUCCESS: 'TOGGLE_TODO_SUCCESS',
  TOGGLE_TODO_FAILURE: 'TOGGLE_TODO_FAILURE',
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
  DELETE_TODO: 'DELETE_TODO',
  DELETE_TODO_FAILURE: 'DELETE_TODO_FAILURE',
  DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS'
}

export function loadTodoList() {
  return {
    type: Actions.LOAD_TODO_LIST
  }
}

export function loadTodoListSuccess(todoList) {
  return {
    type: Actions.LOAD_TODO_LIST_SUCCESS,
    todoList
  }
}

export function loadTodoListFailure() {
  return {
    type: Actions.LOAD_TODO_LIST_FAILURE
  }
}

export function addTodo(todo, callback = undefined) {
  return {
    type: Actions.ADD_TODO,
    todo,
    callback
  }
}

export function addTodoSuccess(todo) {
  return {
    type: Actions.ADD_TODO_SUCCESS,
    todo
  }
}

export function addTodoFailure() {
  return {
    type: Actions.ADD_TODO_FAILURE
  }
}

export function toggleTodo(uniqueId) {
  return {
    type: Actions.TOGGLE_TODO,
    uniqueId
  }
}

export function toggleTodoSuccess(uniqueId) {
  return {
    type: Actions.TOGGLE_TODO_SUCCESS,
    uniqueId
  }
}

export function toggleTodoFailure() {
  return {
    type: Actions.TOGGLE_TODO_FAILURE
  }
}

export function clearNotification() {
  return {
    type: Actions.CLEAR_NOTIFICATION
  }
}

export function deleteTodo(uniqueIds) {
  return {
    type: Actions.DELETE_TODO,
    uniqueIds
  }
}

export function deleteTodoSuccess(uniqueIds) {
  return {
    type: Actions.DELETE_TODO_SUCCESS,
    uniqueIds
  }
}

export function deleteTodoFailure() {
  return {
    type: Actions.DELETE_TODO_FAILURE
  }
}
