import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import TodoApp from './containers/TodoApp'
import {Root} from 'native-base'

export default class AppRoot extends Component {
  constructor(props) {
    super(props)
    this.store = configureStore()
  }

  render() {
    return (
      <Root>
        <Provider store={this.store}>
          <TodoApp />
        </Provider>
      </Root>
    )
  }
}
