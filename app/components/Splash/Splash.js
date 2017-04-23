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

<<<<<<< HEAD
=======
import styles from '../Splash/styles.js'

>>>>>>> ericpang777/master
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
            onPress={() => this.navigate('gamePage')}
          />
          <Image source={require('../../images/MiniSuits.jpg')} style={styles.startImage}/>
        </View>
      );
    }
  }

<<<<<<< HEAD
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
  button: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  startImage: {
    flex: 1,
    width: 500,
    height: 100,
    margin: 0,
    resizeMode: 'contain'
  },
});
=======
>>>>>>> ericpang777/master

export default Splash
