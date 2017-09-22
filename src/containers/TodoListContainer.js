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
  loadTodoList,
  toggleTodo
} from '../actions'
import TodoList from '../components/TodoList'
import AddTodoContainer from './AddTodoContainer'
import {filterTodoList} from '../utils/TodoHelper'

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
    this.navigateToAddTodoPage = this.navigateToAddTodoPage.bind(this)
  }

  componentWillMount() {
    const {actions} = this.props
    actions.loadTodoList()
  }

  toggleTodo() {

  }

  navigateToAddTodoPage() {
    this.props.navigator.push({
      index: 1,
      title: 'Add Todo',
      component: AddTodoContainer,
      passProps: {

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
              />
            </Content>
          </Tab>
          <Tab heading="Active">
            <Content>
              <TodoList
                todoList={activeTodoList}
                toggleTodo={this.toggleTodo}
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
    todoListNotification,
    todoList
  } = state

  return {
    todoListNotification,
    todoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTodoList,
      toggleTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
