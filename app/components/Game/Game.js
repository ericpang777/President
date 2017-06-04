import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import styles from '../Game/styles.js'
import Card from '../Card/Card.js'

import PassButton from '../PassButton/PassButton.js'
import Player from '../Player/Player.js'

class Game extends Component {
  constructor(props)
  {
    super(props)
    this.navigate = this.navigate.bind(this)

    this.state = {
      player : this.props.player,
      eventIndex: this.props.eventIndex,
      playerState : this.props.playerState
    }
  }

  navigate(name)
  {
    this.props.navigator.push({name})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../images/cards/3_of_diamonds.png')} style={styles.card}/>
        <View style={styles.buttonContainer}>
          <PassButton
            eventIndex={this.state.eventIndex}
            onPress={()=> {this.navigate('turnstartPass')}}
          />
        </View>
        <View style={styles.handContainer}>
          {this.state.player}
        </View>
      </View>
    );
  }
}
export default Game
