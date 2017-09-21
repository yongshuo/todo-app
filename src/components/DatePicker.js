import React, {Component} from 'react'
import moment from 'moment'
import {DatePickerIOS, View} from 'react-native'
import {
  List,
  ListItem,
  Left,
  Title,
  Text
} from 'native-base'

export default class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.toggleDatePicker = this.toggleDatePicker.bind(this)
    this.state = {
      showDatePicker: false
    }
  }

  toggleDatePicker() {
    this.setState({
      showDatePicker: !this.state.showDatePicker
    })
  }

  render() {
    return (
      <View>
        <List>
          <ListItem onPress={this.toggleDatePicker}>
            <Left>
              <Title>{this.props.title}</Title>
            </Left>
            <Text>{moment(this.props.date).format(this.props.displayFormat)}</Text>
          </ListItem>
        </List>
        {this.state.showDatePicker &&
          <DatePickerIOS
            date={this.props.date}
            mode={this.props.mode}
            onDateChange={this.props.onDateChange}
            minuteInterval={this.props.minuteInterval}
          />
        }
      </View>
    )
  }
}

DatePicker.defaultProps = {
  minuteInterval: 15,
  title: "Datetime",
  mode: "datetime",
  displayFormat: "DD MMM YYYY hh:mm a"
}
