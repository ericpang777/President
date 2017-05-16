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
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <View style={styles.//}>
        <Text style={styles.//}>
          How many
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
