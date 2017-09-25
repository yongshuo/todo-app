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
  deleteTodo,
  addTodo,
  updateTodo
} from '../actions'
import TodoList from '../components/TodoList'
import TodoContainer from './TodoContainer'
import {filterTodoList} from '../utils/TodoHelper'

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
    this.navigateToAddTodoPage = this.navigateToAddTodoPage.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.clearTodos = this.clearTodos.bind(this)
    this.navigateTodoPage = this.navigateTodoPage.bind(this)
    this.navigateToEditTodoPage = this.navigateToEditTodoPage.bind(this)
  }

  toggleTodo(uniqueId) {
    const {actions} = this.props
    actions.toggleTodo(uniqueId)
  }

  clearTodos(uniqueIds) {
    const {actions} = this.props
    actions.deleteTodo(uniqueIds)
  }

  navigateTodoPage(passProps) {
    this.props.navigator.push({
      index: 1,
      component: TodoContainer,
      navigationBarHidden: true,
      passProps: passProps
    })
  }

  navigateToAddTodoPage() {
    const {actions} = this.props

    this.navigateTodoPage({
      title: 'Add Todo',
      saveAction: actions.addTodo
    })
  }

  navigateToEditTodoPage(todo) {
    const {actions} = this.props

    this.navigateTodoPage({
      ...todo,
      title: 'Edit Todo',
      saveAction: actions.updateTodo
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
        <Tabs initialPage={0} locked>
          <Tab heading="All">
            <Content scrollEnabled={false}>
              <TodoList
                todoList={allTodoList}
                toggleTodo={this.toggleTodo}
                clearTodos={this.clearTodos}
                navigateToEditTodoPage={this.navigateToEditTodoPage}
              />
            </Content>
          </Tab>
          <Tab heading="Active">
            <Content scrollEnabled={false}>
              <TodoList
                todoList={activeTodoList}
                toggleTodo={this.toggleTodo}
                clearTodos={this.clearTodos}
                navigateToEditTodoPage={this.navigateToEditTodoPage}
              />
            </Content>
          </Tab>
        </Tabs>

        <Fab
          direction="up"
          position="bottomRight"
          onPress={this.navigateToAddTodoPage}>
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
      deleteTodo,
      addTodo,
      updateTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
