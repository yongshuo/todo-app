export const Actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
}

export function addTodo(todo) {
  return {
    type: Actions.ADD_TODO,
    todo
  }
}

export function toggleTodo(uniqueId) {
  return {
    type: Actions.TOGGLE_TODO,
    uniqueId
  }
}

export function deleteTodo(uniqueIds) {
  return {
    type: Actions.DELETE_TODO,
    uniqueIds
  }
}
