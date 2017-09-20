import React, {Component} from 'react'
import { connect } from 'react-redux'

import {NavigatorIOS} from 'react-native'
import TodoListContainer from './TodoListContainer'

export default class TodoApp extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          index: 0,
          title: 'Todo List',
          component: TodoListContainer
        }}
        style={{flex: 1}}
      />
    )
  }
}
