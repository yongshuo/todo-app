import React, {Component} from 'react'
import {Grid, Col, Button, Text} from 'native-base'

export default class TodoFooter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid style={{position: 'absolute', bottom: 0}}>
        {this.props.numTodoList > 0 &&
          <Col>
            <Button danger block full onPress={this.props.clearTodo}>
              <Text>Clear</Text>
            </Button>
          </Col>
        }
        <Col>
          <Button success block full onPress={this.props.addTodo}>
            <Text>Add New</Text>
          </Button>
        </Col>
      </Grid>
    )
  }
}
