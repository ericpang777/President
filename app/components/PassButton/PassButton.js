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
    }
  }

  render() {
    let messages = ["PASS","TRADE CARDS"]
    return (
      <TouchableOpacity onPress={()=> {this.props.onPress()}}>
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
