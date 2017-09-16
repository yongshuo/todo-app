import React, {Component} from 'react'
import {NavigatorIOS} from 'react-native'
import TodoListScene from './scenes/TodoListScene'

export default class App extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          index: 0,
          title: 'Todo List',
          component: TodoListScene
        }}
        style={{flex: 1}}
      />
    )
  }
}
