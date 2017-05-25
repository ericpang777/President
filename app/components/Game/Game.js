
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

class Game extends Component {
  constructor(props)
  {
    super(props)

      /*let deck = new Array()

      var deck = new Array(54)

      var cardName:String
      var value:number
      var hearts:Card
      var spades:Card
      var diamonds:Card
      var clubs:Card

      for(var i = 1; i < 14; i++){
      switch (i) {
        case 1:
          cardName = "A"
          value = 12
          break;
        case 2:
          cardName = "2"
          value = 13
          break;
        case 11:
          cardName = "J"
          value = 9
          break;
        case 12:
          cardName = "Q"
          value = 10
          break;
        case 13:
          cardName = "K"
          value = 11
          break;
        default:
          cardName = "" + i
          value = i-2
      }
      hearts = new Card(value,"hearts",cardName)
      spades = new Card(value,"spades",cardName)
      diamonds = new Card(value,"diamonds",cardName)
      clubs = new Card(value,"clubs",cardName)

      deck.concat(hearts,spades,diamonds,clubs)
    }

    var joker = new Card(14,"black","Joker")
    deck.concat(joker)
    joker = new Card(14,"red","Joker")
    deck.concat(joker)

    var joker = new Card(14,"black","joker")
    deck.concat(joker)
    joker = new Card(14,"red","joker")
    deck.concat(joker)
  }*/

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
      require('../../images/cards/K_of_diamonds.png'),
      require('../../images/cards/Joker_of_red.png'),
      require('../../images/cards/Joker_of_black.png')
    ];
    return (
      <View style={styles.container}>
        <Image
          source={cardImages[0]}
          style={styles.card}
        />
        <Image
          source={cardImages[0]}
          style={styles.card}
        />
        <Image
          source={cardImages[0]}
          style={styles.card}
        />
        <Image
          source={cardImages[0]}
          style={styles.card}
        />
      </View>
    );
  }
}
export default Game
