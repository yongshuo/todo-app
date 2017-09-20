import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
  Container,
  Header,
  Body,
  Content,
  Spinner
} from 'native-base'
import {
  loadTodoList,
  changeTodoListFilter,
  toggleTodo
} from '../actions'
import TodoList from '../components/TodoList'

class TodoListContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {actions} = this.props
    actions.loadTodoList()
  }

  toggleTodo() {
    
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          {this.props.todoListLoading &&
            <Spinner color='black' />
          }

          <TodoList
            todoList={this.props.todoList}
            toggleTodo={this.toggleTodo}
          />
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    todoListFilter,
    todoListLoading,
    todoListLoadFailure,
    togglingTodo,
    toggleTodoFailure,
    todoList
  } = state

  return {
    todoListFilter,
    todoListLoading,
    todoListLoadFailure,
    togglingTodo,
    toggleTodoFailure,
    todoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTodoList,
      changeTodoListFilter,
      toggleTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
