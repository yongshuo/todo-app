import React, {Component} from 'react'
import {Root, Container, Content, Header, Body, Title, ActionSheet} from 'native-base'
import TodoHeader from '../components/TodoHeader'
import CustomDate from '../utils/CustomDate'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'
import AddTodoScene from './AddTodoScene'
import {AsyncStorage} from 'react-native'

export default class TodoListScene extends Component {
  constructor(props) {
    super(props)
    this.prevDate = this.prevDate.bind(this)
    this.nextDate = this.nextDate.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.clearTodo = this.clearTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.getTodoList = this.getTodoList.bind(this)

    this.state = {
      currentDate: CustomDate.toString(),
      todoList: []
    }
  }

  componentWillMount() {
    this.getTodoList()
  }

  prevDate() {
    this.setState({
      currentDate: CustomDate.prevDate().toString()
    })
    this.getTodoList()
  }

  nextDate() {
    this.setState({
      currentDate: CustomDate.nextDate().toString()
    })
    this.getTodoList()
  }

  getTodoList(todoList = []) {
    if (todoList.length == 0) {
      AsyncStorage.getItem(`todoApp@${CustomDate.toString()}`)
        .then(data => {
          if (data != undefined && data != null) {
            this.setState({
              todoList: JSON.parse(data)
            })
          } else {
            this.setState({
              todoList: []
            })
          }
        })
        .catch(error => {
        })
    } else {
      this.setState({
        todoList: todoList
      })
    }
  }

  toggleTodo(id) {
    AsyncStorage.getItem(`todoApp@${CustomDate.toString()}`)
      .then(data => {
        let todoList = JSON.parse(data)
        // find todo by id
        var todo = todoList.find(i => i.id == id)

        // update completed
        todo.completed = !todo.completed

        // setItem
        AsyncStorage.setItem(`todoApp@${CustomDate.toString()}`, JSON.stringify(todoList))
          .then(data => {
            this.getTodoList(todoList)
          })
          .catch(error => {

          })
      })
      .catch(error => {
      })
  }

  addTodo() {
    this.props.navigator.push({
      index: 1,
      title: 'Add Todo',
      component: AddTodoScene,
      passProps: {
        currentDate: CustomDate.toString(),
        addTodoCallBack: this.getTodoList,
        notePlaceholder: `Adding your note for date ${CustomDate.toString()}`
      }
    })
  }

  clearTodo() {
    AsyncStorage.removeItem(`todoApp@${CustomDate.toString()}`)
      .then(data => {
        this.getTodoList()
      })
      .catch(error => {
      })
  }

  render() {
    return (
      <Root>
        <Container>
          <Header>
            <Body>
              <Title>Todo List</Title>
            </Body>
          </Header>

          <Content>
            <TodoHeader
              currentDate={this.state.currentDate}
              prevDate={this.prevDate}
              nextDate={this.nextDate}
            />
            <TodoList
              todoList={this.state.todoList}
              toggleTodo={this.toggleTodo}
            />
          </Content>

          <TodoFooter
            addTodo={this.addTodo}
            numTodoList={this.state.todoList.length}
            clearTodo={() => {
              ActionSheet.show(
                {
                  options: ["Delete", "Cancel"],
                  cancelButtonIndex: 1,
                  destructiveButtonIndex: 0,
                  title: `Are you sure to clear your todo list of ${CustomDate.toString()}?`
                },
                buttonIndex => {
                  if (buttonIndex == 0) {
                    this.clearTodo()
                  }
                }
              )
            }}
          />
        </Container>
      </Root>
    )
  }
}
