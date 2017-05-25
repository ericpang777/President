
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
import Card from '../Card/Card.js'
import CardOther from '../Card/CardOther'
import Deck from '../Card/Deck'
class Game extends Component {
  constructor(props)
  {
    super(props)
    //<Image source={require('../../images/cards/10_of_clubs.png')} style={styles.card} />
  }
  render() {
    var cardImages = [
require('../../images/cards/A_of_spades.png'),
require('../../images/cards/A_of_hearts.png'),
require('../../images/cards/A_of_clubs.png'),
require('../../images/cards/A_of_diamonds.png'),
require('../../images/cards/2_of_spades.png'),
require('../../images/cards/2_of_hearts.png'),
require('../../images/cards/2_of_clubs.png'),
require('../../images/cards/2_of_diamonds.png'),
require('../../images/cards/3_of_spades.png'),
require('../../images/cards/3_of_hearts.png'),
require('../../images/cards/3_of_clubs.png'),
require('../../images/cards/3_of_diamonds.png'),
require('../../images/cards/4_of_spades.png'),
require('../../images/cards/4_of_hearts.png'),
require('../../images/cards/4_of_clubs.png'),
require('../../images/cards/4_of_diamonds.png'),
require('../../images/cards/5_of_spades.png'),
require('../../images/cards/5_of_hearts.png'),
require('../../images/cards/5_of_clubs.png'),
require('../../images/cards/5_of_diamonds.png'),
require('../../images/cards/6_of_spades.png'),
require('../../images/cards/6_of_hearts.png'),
require('../../images/cards/6_of_clubs.png'),
require('../../images/cards/6_of_diamonds.png'),
require('../../images/cards/7_of_spades.png'),
require('../../images/cards/7_of_hearts.png'),
require('../../images/cards/7_of_clubs.png'),
require('../../images/cards/7_of_diamonds.png'),
require('../../images/cards/8_of_spades.png'),
require('../../images/cards/8_of_hearts.png'),
require('../../images/cards/8_of_clubs.png'),
require('../../images/cards/8_of_diamonds.png'),
require('../../images/cards/9_of_spades.png'),
require('../../images/cards/9_of_hearts.png'),
require('../../images/cards/9_of_clubs.png'),
require('../../images/cards/9_of_diamonds.png'),
require('../../images/cards/10_of_spades.png'),
require('../../images/cards/10_of_hearts.png'),
require('../../images/cards/10_of_clubs.png'),
require('../../images/cards/10_of_diamonds.png'),
require('../../images/cards/J_of_spades.png'),
require('../../images/cards/J_of_hearts.png'),
require('../../images/cards/J_of_clubs.png'),
require('../../images/cards/J_of_diamonds.png'),
require('../../images/cards/Q_of_spades.png'),
require('../../images/cards/Q_of_hearts.png'),
require('../../images/cards/Q_of_clubs.png'),
require('../../images/cards/Q_of_diamonds.png'),
require('../../images/cards/K_of_spades.png'),
require('../../images/cards/K_of_hearts.png'),
require('../../images/cards/K_of_clubs.png'),
require('../../images/cards/K_of_diamonds.png')
    ]

    function getOverlap(n){
      return{
        flex: 1,
        height: 85,
        width: 40,
        right: 20 + 40*(n-1),
        resizeMode: 'contain'
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.table}>
          North
        </Text>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(0)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(1)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(2)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(3)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(4)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(5)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(6)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(7)}/>
        <Image source={cardImages[Math.floor(Math.random()*cardImages.length)]} style={getOverlap(8)}/>
      </View>
    );
  }
}
export default Game
