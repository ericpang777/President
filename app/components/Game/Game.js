
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
import Deck from '../Card/Deck.js'
import Hand from '../Card/Hand.js'
import Card from '../Card/Hand.js'

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        height: 170,
        width: 80,
        right: 20 + 40*(n-1),
        top: 100,
        resizeMode: 'contain'
      }
    }
    //{cardImages[Math.floor(Math.random()*cardImages.length)]

    //Randomly sort card Array
    cardImages.sort(function(a, b){return 0.5 - Math.random()});

    var cardArray = [
      <Card card="A" value="12" imageIndex="0"/>,
      <Card card="A" value="12" imageIndex="1"/>,
      <Card card="A" value="12" imageIndex="2"/>,
      <Card card="A" value="12" imageIndex="3"/>,
      <Card card="A" value="12" imageIndex="4"/>,
      <Card card="A" value="12" imageIndex="5"/>,
      <Card card="A" value="12" imageIndex="6"/>,
      <Card card="A" value="12" imageIndex="7"/>,
      <Card card="A" value="12" imageIndex="8"/>
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.table}>
          North
        </Text>
        <Hand hand={cardArray}/>
        
        <Image source={cardImages[0]} style={getOverlap(-3)}/>
        <Image source={cardImages[1]} style={getOverlap(-2)}/>
        <Image source={cardImages[2]} style={getOverlap(-1)}/>
        <Image source={cardImages[3]} style={getOverlap(0)}/>
        <Image source={cardImages[4]} style={getOverlap(1)}/>
        <Image source={cardImages[5]} style={getOverlap(2)}/>
        <Image source={cardImages[6]} style={getOverlap(3)}/>
        <Image source={cardImages[7]} style={getOverlap(4)}/>
        <Image source={cardImages[8]} style={getOverlap(5)}/>

      </View>
    );
  }
}
export default Game
