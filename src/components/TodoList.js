import React, {Component} from 'react'
import { List, ListItem, Body, Text, CheckBox } from 'native-base'
import {StyleSheet} from 'react-native'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List>
        <ListItem itemDivider>
          <Text>Past</Text>
        </ListItem>
        {
          this.props.todoList.map(todo => {
            return (
              <ListItem key={todo.id} onPress={() => this.props.toggleTodo(todo.id)}>
                <CheckBox
                  color="green"
                  checked={todo.completed}
                  onPress={() => this.props.toggleTodo(todo.id)}
                />
                <Body>
                  <Text style={todo.completed ? StyleSheet.flatten(styles.crossText) : StyleSheet.flatten('')}>{todo.text}</Text>
                </Body>
              </ListItem>
            )
          })
        }

      </List>
    )
  }
}

const styles = StyleSheet.create({
  crossText: {
    textDecorationLine: 'line-through'
  },
  noNote: {
    padding: 15
  }
})
