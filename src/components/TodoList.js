import React, {Component} from 'react'
import { List, ListItem, Body, Text, CheckBox, Container } from 'native-base'
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
              {this.props.todoList[key].map((todo, index) => {
                return (
                  <ListItem key={index}>
                    <CheckBox
                      color="green"
                      checked={todo.completed}
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
