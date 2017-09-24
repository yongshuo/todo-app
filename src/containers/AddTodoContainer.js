import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTodo} from '../actions'
import DatePicker from '../components/DatePicker'
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Form,
  Item,
  Label,
  InputGroup,
  Textarea,
  Button,
  Text,
  Toast,
  Left,
  Right,
  Icon
} from 'native-base'
import {generateUniqueId} from '../utils/TodoHelper'

class AddTodoContainer extends Component {
  constructor(props) {
    super(props)
    this.onDateChange = this.onDateChange.bind(this)
    this.updateText = this.updateText.bind(this)
    this.saveTodo = this.saveTodo.bind(this)
    
    this.state = {
      date: new Date(),
      text: ''
    }
  }

  onDateChange(date) {
    this.setState({
      date: date
    })
  }

  updateText(text) {
    this.setState({
      text: text
    })
  }

  saveTodo() {
    const {actions} = this.props

    actions.addTodo({
      dueTime: this.state.date,
      text: this.state.text,
      uniqueId: generateUniqueId(),
      completed: false
    })

    this.props.navigator.pop()
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.props.navigator.pop()}}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.saveTodo}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
          <Content padder>
            <DatePicker
              title="Due Date"
              date={this.state.date}
              onDateChange={this.onDateChange}
              minuteInterval={15}
              mode="datetime"
              displayFormat="DD MMM YYYY hh:mm a"
            />

            <InputGroup borderType="regular">
              <Textarea
                placeholder="Enter your todo here."
                autoFocus={false}
                onChangeText={this.updateText}
                style={{flex: 1.0, height: 200}}
              />
            </InputGroup>
          </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addTodo
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer)
