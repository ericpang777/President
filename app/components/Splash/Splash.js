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

import styles from '../Splash/styles.js'

class Splash extends Component{
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  navigate(name)
  {
    this.props.navigator.push({name})
  }
  render(){
      return(
          <View style={styles.container}>
            <Text style={styles.welcome}>
              President
            </Text>
            <Button
              title="Pass and Play"
              style={styles.button}
              onPress={() => this.navigate('setupPage')}
            />
            <Image source={require('../../images/MiniSuits.jpg')} style={styles.startImage}/>
          </View>
        );
      }
    }

export default Splash
