import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from '../PassButton/styles.js'

class PassButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      eventIndex: this.props.eventIndex,
      path: this.props.path,
    }
  }
  _onPressButton(){
      if(this.state.eventIndex == 0){
        this.state.eventIndex++
      }
      /*
      else if: rematch of game => eventIndex = 2
      else: eventIndex = 0 (Start of game)
      */
  }
  render() {
    let messages = ["Pass","Trade Cards"]
    return (
      <TouchableOpacity onPress={this._onPressButton()}>
        <View style = {styles.PassButton}>
          <Text>
            {messages[this.state.eventIndex]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PassButton
