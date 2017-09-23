import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {View} from 'react-native'
import {
  List,
  ListItem,
  Body,
  Text,
  CheckBox,
  Container,
  Card,
  CardItem,
  Right,
  Button,
  Icon,
  Left,
  ActionSheet
} from 'native-base'

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
                <Left>
                  <Text>{key}</Text>
                </Left>
                <Right>
                  {this.props.todoList[key].length > 0 &&
                    <Button
                      transparent
                      small
                      onPress={() =>
                        ActionSheet.show(
                          {
                            options: ["Delete", "Cancel"],
                            cancelButtonIndex: 1,
                            destructiveButtonIndex: 0,
                            title: `Are you sure to delete todos in group ${key} ?`
                          },
                          buttonIndex => {
                            if (buttonIndex == 0) {
                              this.props.clearTodos(this.props.todoList[key].map(todo => todo.uniqueId))
                            }
                          }
                        )
                      }>
                      <Icon name="trash" color="red" />
                    </Button>
                  }
                </Right>
              </ListItem>
              {this.props.todoList[key].length == 0 &&
                <ListItem>
                  <Body>
                    <Text note>No notes for group {key}</Text>
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
