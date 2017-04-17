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
        <Button
           style={styles.instructions}
           title="Pass and Play"/>
        <Image source={require('./app/images/MiniSuits.jpg')} style={styles.startImage}/>
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
    marginBottom: 0,
    paddingBottom: 0,
  },
  startImage: {
    flex: 1,
    width: 500,
    height: 100,
    margin: 0,
    resizeMode: 'contain'
  },
});

AppRegistry.registerComponent('President', () => President);
