import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
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
  ActionSheet,
  SwipeRow,
  Content,
  View
} from 'native-base'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.confirmDeletion = this.confirmDeletion.bind(this)
  }

  confirmDeletion(key, uniqueId = null) {
    ActionSheet.show(
      {
        options: ["Delete", "Cancel"],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        title: `Are you sure to delete todos ?`
      },
      buttonIndex => {
        if (buttonIndex == 0) {
          if (uniqueId == null) {
            this.props.clearTodos(this.props.todoList[key].map(todo => todo.uniqueId))
          } else {
            this.props.clearTodos([uniqueId])
          }

        }
      }
    )
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
                      danger
                      onPress={() => this.confirmDeletion(key)}>
                      <Icon name="trash" />
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
                  <SwipeRow
                    key={index}
                    rightOpenValue={-70}
                    leftOpenValue={70}
                    left={
                      <Button
                        info
                        onPress={() => this.props.navigateToEditTodoPage(todo)}>
                        <Icon active name="clipboard" />
                      </Button>
                    }
                    body={
                      <View style={StyleSheet.flatten(styles.swipeContainer)} onPress={() => this.props.toggleTodo(todo.uniqueId)}>
                        <View style={StyleSheet.flatten(styles.checkboxContainer)}>
                          <CheckBox
                            color="green"
                            checked={todo.completed}
                            onPress={() => this.props.toggleTodo(todo.uniqueId)}
                          />
                        </View>
                        <TouchableOpacity style={StyleSheet.flatten(styles.todoContainer)} onPress={() => this.props.toggleTodo(todo.uniqueId)}>
                          <Text style={todo.completed ? StyleSheet.flatten(styles.crossText) : StyleSheet.flatten('')}>
                            {todo.text}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    }
                    right={
                      <Button danger onPress={() => this.confirmDeletion(key, todo.uniqueId)}>
                        <Icon active name="trash" />
                      </Button>
                    }
                  />
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
  swipeContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 35
  },
  checkboxContainer: {
    flex: 0.1,
    alignSelf: 'center'
  },
  todoContainer: {
    flex: 0.9,
    alignSelf: 'center'
  },
  crossText: {
    textDecorationLine: 'line-through'
  }
})
