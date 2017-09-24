import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {autoRehydrate} from 'redux-persist'
import todoListHandler from '../middleware/todoListHandler'

import rootReducer from '../reducers'

function createStoreWithMiddleware(store) {
  return compose(
    applyMiddleware(
      thunkMiddleware,
      todoListHandler
    ),
    autoRehydrate()
  )(store)
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(createStore)(rootReducer, initialState)
}
