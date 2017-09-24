import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Container,
  Header,
  Body,
  Content,
  Spinner,
  Tabs,
  Tab,
  Button,
  Icon,
  Text,
  Fab
} from 'native-base'
import {
  toggleTodo,
  deleteTodo
} from '../actions'
import TodoList from '../components/TodoList'
import AddTodoContainer from './AddTodoContainer'
import {filterTodoList} from '../utils/TodoHelper'

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
    this.navigateToAddTodoPage = this.navigateToAddTodoPage.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.clearTodos = this.clearTodos.bind(this)
  }

  toggleTodo(uniqueId) {
    const {actions} = this.props
    actions.toggleTodo(uniqueId)
  }

  clearTodos(uniqueIds) {
    const {actions} = this.props
    actions.deleteTodo(uniqueIds)
  }

  navigateToAddTodoPage() {
    this.props.navigator.push({
      index: 1,
      component: AddTodoContainer,
      navigationBarHidden: true,
      passProps: {
        backTitle: 'Todo List',
        title: 'Add Todo'
      }
    })
  }

  render() {
    const {
      todoList
    } = this.props

    const allTodoList = filterTodoList(todoList)
    const activeTodoList = filterTodoList(todoList, activeOnly = true)

    return (
      <Container>
        <Header />
        <Tabs initialPage={0}>
          <Tab heading="All">
            <Content>
              <TodoList
                todoList={allTodoList}
                toggleTodo={this.toggleTodo}
                clearTodos={this.clearTodos}
              />
            </Content>
          </Tab>
          <Tab heading="Active">
            <Content>
              <TodoList
                todoList={activeTodoList}
                toggleTodo={this.toggleTodo}
                clearTodos={this.clearTodos}
              />
            </Content>
          </Tab>
        </Tabs>

        <Fab direction="up" position="bottomRight" onPress={this.navigateToAddTodoPage}>
          <Icon name="md-add" />
        </Fab>

      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    todoList
  } = state

  return {
    todoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      toggleTodo,
      deleteTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
