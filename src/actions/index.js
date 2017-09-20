export const Actions = {
  LOAD_TODO_LIST: 'LOAD_TODO_LIST',
  LOAD_TODO_LIST_SUCCESS: 'LOAD_TODO_LIST_SUCCESS',
  LOAD_TODO_LIST_FAILURE: 'LOAD_TODO_LIST_FAILURE',
  CHANGE_TODO_LIST_FILTER: 'CHANGE_TODO_LIST_FILTER',
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

export function changeTodoListFilter(filter) {
  return {
    type: Actions.CHANGE_TODO_LIST_FILTER,
    filter
  }
}

export function addTodo(todo) {
  return {
    type: Actions.ADD_TODO,
    todo
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

export function toggleTodo(index) {
  return {
    type: Actions.TOGGLE_TODO,
    index
  }
}

export function toggleTodoSuccess(index) {
  return {
    type: Actions.TOGGLE_TODO_SUCCESS,
    index
  }
}

export function toggleTodoFailure() {
  return {
    type: Actions.TOGGLE_TODO_FAILURE
  }
}
