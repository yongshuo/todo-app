import React, {Component} from 'react'
import { List, ListItem, Body, Text, CheckBox, Container, Card, CardItem, Right, Button, Icon, Left} from 'native-base'
import {StyleSheet} from 'react-native'
import {View} from 'react-native'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List>
      {Object.keys(this.props.todoList).map(key => {
          return (
            <View key={key}>
              <ListItem itemDivider key={key}>
                <Text>{key}</Text>
              </ListItem>
              {this.props.todoList[key].length == 0 &&
                <ListItem>
                  <Body>
                    <Text>{key} has no todos</Text>
                  </Body>
                </ListItem>
              }
              {this.props.todoList[key].map((todo, index) => {
                return (
                  <ListItem key={index} onPress={() => this.props.toggleTodo(todo.uniqueId)}>
                    <CheckBox
                      color="green"
                      checked={todo.completed}
                      onPress={() => this.props.toggleTodo(todo.uniqueId)}
                    />
                    <Body>
                      <Text style={todo.completed ? StyleSheet.flatten(styles.crossText) : StyleSheet.flatten('')}>
                        {todo.text}
                      </Text>
                    </Body>
                  </ListItem>
                )
              })}
            </View>
          )
        })}
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
