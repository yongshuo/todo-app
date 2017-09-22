import {Actions} from '../actions'
import {AsyncStorage} from 'react-native'
import moment from 'moment'
import {
  loadTodoListSuccess,
  loadTodoListFailure,
  addTodoSuccess,
  addTodoFailure,
  toggleTodoSuccess,
  toggleTodoFailure
} from '../actions'

const storageKey = 'todoApp'

function retrieveTodoList(store) {
  AsyncStorage.getItem(storageKey)
    .then(todoList => {
      if (todoList != null) {
        store.dispatch(loadTodoListSuccess(JSON.parse(todoList)))
      } else {
        store.dispatch(loadTodoListSuccess([]))
      }
    })
    .catch(error => {
      store.dispatch(loadTodoListFailure())
    })
}

function addTodo(store, action) {
  let {
    todoList
  } = store.getState()

  AsyncStorage.setItem(storageKey, JSON.stringify([...todoList, action.todo]))
    .then(done => {
      store.dispatch(addTodoSuccess(action.todo))
    })
    .catch(error => {
      store.dispatch(addTodoFailure())
    })
}

function toggleTodo(store, action) {
  let {
    todoList
  } = store.getState()

  // get new todo
  const newTodos = todoList.map(todo => {
    if (todo.uniqueId == action.uniqueId) {
      return Object.assign({}, todo, {
        completed: !todo.completed
      })
    }
    return todo
  })

  AsyncStorage.setItem(storageKey, JSON.stringify(newTodos))
    .then(done => {
      store.dispatch(toggleTodoSuccess(action.uniqueId))
    })
    .catch(error => {
      store.dispatch(toggleTodoFailure())
    })
}

export default store => next => action => {
  next(action)

  switch (action.type) {
    case Actions.LOAD_TODO_LIST:
      retrieveTodoList(store)
      break
    case Actions.ADD_TODO:
      addTodo(store, action)
      break
    case Actions.TOGGLE_TODO:
      toggleTodo(store, action)
      break
  }
}
