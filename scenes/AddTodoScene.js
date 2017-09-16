import React, {Component} from 'react'
import {Container, Content, Header, Body, Title, InputGroup, Input, Button, Text, Toast, Root, Textarea} from 'native-base'
import {AsyncStorage} from 'react-native'

export default class AddTodoScene extends Component {
  constructor(props) {
    super(props)
    this.updateText = this.updateText.bind(this)
    this.saveNote = this.saveNote.bind(this)

    this.state = {
      note: ''
    }
  }

  updateText(text) {
    this.setState({
      note: text
    })
  }

  saveNote() {
    // get current todo
    AsyncStorage.getItem(`todoApp@${this.props.currentDate}`)
      .then(data => {
        let currentTodo = []
        if (data != undefined && data != null) {
          currentTodo = JSON.parse(data)
        }
        // calculate id
        const id = currentTodo.length == 0 ? 0 : Math.max(...currentTodo.map(i => i.id)) + 1

        // append todoList
        currentTodo.push({
          id: id,
          text: this.state.note,
          completed: false
        })
        // set todo list to current date
        AsyncStorage.setItem(`todoApp@${this.props.currentDate}`, JSON.stringify(currentTodo))
          .then(data => {
            // updating todo list
            this.props.addTodoCallBack(currentTodo)
            this.props.navigator.pop()
          })
          .catch(error => {

          })
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
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
        <Content padder>
            <InputGroup borderType="regular">
              <Textarea
                placeholder={this.props.notePlaceholder}
                autoFocus={true}
                onChangeText={this.updateText}
                style={{flex: 1.0, height: 200}}
              />
            </InputGroup>
        </Content>
        <Button success full onPress={this.saveNote}>
          <Text>Save</Text>
        </Button>
      </Container>
      </Root>
    )
  }
}
