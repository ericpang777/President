import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback
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
    let messages = ["PASS","PLAY"]
    return (
      <TouchableNativeFeedback onPress={()=> {this.props.onPress()}}>
        <View style = {styles.button}>
          <Text style={styles.buttonText}>
            {messages[this.state.eventIndex]}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default PassButton
