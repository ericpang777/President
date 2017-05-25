import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import styles from '../Setup/styles.js'

class Setup extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name)
  {
    this.props.navigator.push({name})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Select the number of player in the game
        </Text>
        <Button
          title="Start Game"
          style={styles.button}
          onPress={() => this.navigate('gamePage')}
        />
      </View>
    );
  }
}

export default Setup
