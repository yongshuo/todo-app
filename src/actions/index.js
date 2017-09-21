export const Actions = {
  LOAD_TODO_LIST: 'LOAD_TODO_LIST',
  LOAD_TODO_LIST_SUCCESS: 'LOAD_TODO_LIST_SUCCESS',
  LOAD_TODO_LIST_FAILURE: 'LOAD_TODO_LIST_FAILURE',
  ADD_TODO: 'ADD_TODO',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  ADD_TODO_FAILURE: 'ADD_TODO_FAILURE',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TOGGLE_TODO_SUCCESS: 'TOGGLE_TODO_SUCCESS',
  TOGGLE_TODO_FAILURE: 'TOGGLE_TODO_FAILURE'
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

export function addTodo(todo) {
  return {
    type: Actions.ADD_TODO,
    todo
  }
}

export function addTodoSuccess(key, todo) {
  return {
    type: Actions.ADD_TODO_SUCCESS,
    key,
    todo
  }
}

export function addTodoFailure() {
  return {
    type: Actions.ADD_TODO_FAILURE
  }
}

export function toggleTodo(key, index) {
  return {
    type: Actions.TOGGLE_TODO,
    key,
    index
  }
}

export function toggleTodoSuccess(key, index) {
  return {
    type: Actions.TOGGLE_TODO_SUCCESS,
    key,
    index
  }
}

export function toggleTodoFailure() {
  return {
    type: Actions.TOGGLE_TODO_FAILURE
  }
}
