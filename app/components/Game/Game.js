import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00cc66'
  },
  table: {
    textAlign: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
});

export default Game
