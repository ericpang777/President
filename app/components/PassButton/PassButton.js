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
    //transition to 
  }
  render() {
    let messages = ["PASS","TRADE CARDS"]
    return (
      <TouchableOpacity onPress={this._onPressButton()}>
        <View style = {styles.button}>
          <Text style={styles.buttonText}>
            {messages[this.state.eventIndex]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PassButton
