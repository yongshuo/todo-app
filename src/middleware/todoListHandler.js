import {Actions} from '../actions'
import {AsyncStorage} from 'react-native'
import {
  loadTodoListSuccess,
  loadTodoListFailure
} from '../actions'

const storageKey = 'todoApp'

function retrieveTodoList(store) {
  AsyncStorage.getItem(storageKey)
    .then(todoList => {
      if (todoList != null) {
        store.dispatch(loadTodoListSuccess(JSON.parse(data)))
      } else {
        store.dispatch(loadTodoListSuccess([]))
      }
    })
    .catch(error => {
      store.dispatch(loadTodoListFailure())
    })
}

export default store => next => action => {
  next(action)

  switch (action.type) {
    case Actions.LOAD_TODO_LIST:
      retrieveTodoList(store)
      break
  }
}
