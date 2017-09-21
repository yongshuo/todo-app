import {Actions} from '../actions'
import {AsyncStorage} from 'react-native'
import moment from 'moment'
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
        const sampleData = [
          {
            completed: false,
            text: 'Okay I will do it',
            id: 1
          }
        ]
        store.dispatch(loadTodoListSuccess(sampleData))
      }
    })
    .catch(error => {
      store.dispatch(loadTodoListFailure())
    })
}

function addTodo(todo) {
    console.log(todo)
  // get key from todo
  const key = `todoApp@${moment(todo.dueTime).format('ddd, DD MMM YYYY')}`

  // get current Todos

}

export default store => next => action => {
  next(action)

  switch (action.type) {
    case Actions.LOAD_TODO_LIST:
      retrieveTodoList(store)
      break
    case Actions.ADD_TODO:
      addTodo(action.todo)
      break
  }
}
