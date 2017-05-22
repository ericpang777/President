
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import styles from '../Game/styles.js'

class Game extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.table}>
          Game
        </Text>
        <Image source={require('../../images/cards/10_of_clubs.png')} style={styles.card}/>
      </View>
    );
  }
}
export default Game
