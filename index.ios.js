/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class President extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          President
        </Text>
        <Text style={styles.instructions}>
          Tap to start
        </Text>
        <Image source={require('./MiniSuits.jpg')} />
        <Button
        //onPress={Do something}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this game"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 40,

    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('President', () => President);
