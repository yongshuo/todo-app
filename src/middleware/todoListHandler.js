import {Actions} from '../actions'
import {AsyncStorage} from 'react-native'
import moment from 'moment'
import {
  loadTodoListSuccess,
  loadTodoListFailure,
  addTodoSuccess,
  addTodoFailure
} from '../actions'

const storageKey = 'todoApp'

function retrieveTodoList(store) {
  AsyncStorage.getItem(storageKey)
    .then(todoList => {
      if (todoList != null) {
        store.dispatch(loadTodoListSuccess(JSON.parse(todoList)))
      } else {
        store.dispatch(loadTodoListSuccess({}))
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

  // get key from todo
  const key = moment(action.todo.dueTime).format('ddd, DD MMM YYYY')

  // set to empty array if key does not exists
  if (!todoList.hasOwnProperty(key)) {
    todoList[key] = []
  }

  // append new todo to current todo list
  todoList[key].push(action.todo)

  // Saving new todo list in storage
  AsyncStorage.setItem(storageKey, JSON.stringify(todoList))
    .then(done => {
      store.dispatch(addTodoSuccess(key, action.todo))
    })
    .catch(error => {
      store.dispatch(addTodoFailure())
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
  }
}
