import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import todoListHandler from '../middleware/todoListHandler'

import rootReducer from '../reducers'

function createStoreWithMiddleware(store) {
  return compose(
    applyMiddleware(
      thunkMiddleware,
      todoListHandler
    )
  )(store)
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(createStore)(rootReducer, initialState)
}
