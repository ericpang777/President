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
import styles from '../Game/styles.js'

>>>>>>> ericpang777/master
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

<<<<<<< HEAD
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

=======
>>>>>>> ericpang777/master
export default Game
