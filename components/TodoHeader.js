import React, {Component} from 'react'
import {Grid, Col, Text, Button, Icon} from 'native-base'
import {StyleSheet} from 'react-native'

export default class DateHeader extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid style={StyleSheet.flatten(styles.totoHeader)}>
        <Col style={StyleSheet.flatten(styles.navigate)}>
          <Button transparent onPress={this.props.prevDate}>
            <Icon name="arrow-back" />
          </Button>
        </Col>
        <Col style={StyleSheet.flatten(styles.content)}>
          <Text style={{textAlign: "center"}}>{this.props.currentDate}</Text>
        </Col>
        <Col style={StyleSheet.flatten(styles.navigate)}>
          <Button transparent onPress={this.props.nextDate}>
            <Icon name="arrow-forward" />
          </Button>
        </Col>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  totoHeader: {
    height: 48,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  navigate: {
    flex: 0.1
  },
  content: {
    flex: 0.8,
    alignSelf: 'center'
  },
  textCenter: {
    textAlign: 'center'
  }
})
