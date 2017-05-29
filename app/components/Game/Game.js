
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

    this.state = {
      deck : [
        [12, 0],[12, 1],[12, 2],[12, 3],
        [13, 4],[13, 5],[13, 6],[13, 7],
        [1, 8],[1, 9],[1, 10],[1, 11],
        [2, 12],[2, 13],[2, 14],[2, 15],
        [3, 16],[3, 17],[3, 18],[3, 19],
        [4, 20],[4, 21],[4, 22],[4, 23],
        [5, 24],[5, 25],[5, 26],[5, 27],
        [6, 28],[6, 29],[6, 30],[6, 31],
        [7, 32],[7, 33],[7, 34],[7, 35],
        [8, 36],[8, 37],[8, 38],[8, 39],
        [9, 40],[9, 41],[9, 42],[9, 43],
        [10, 44],[10, 45],[10, 46],[10, 47],
        [11, 48],[11, 49],[11, 50],[11, 51],
        [14, 52],[14, 53]
      ]
    }
      /*let deck = new Array()
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
    deck.concat(joker)*/
  }
  render() {
    var hand = [
      <Card value={12} card="A" imageIndex={0} overlap = {-4}/>,
      <Card value={12} card="A" imageIndex={1} overlap = {-3}/>,
      <Card value={12} card="A" imageIndex={2} overlap = {-2}/>,
      <Card value={12} card="A" imageIndex={3} overlap = {-1}/>,
      <Card value={13} card="2" imageIndex={4} overlap = {0}/>,
      <Card value={13} card="2" imageIndex={5} overlap = {1}/>,
      <Card value={13} card="2" imageIndex={6} overlap = {2}/>,
      <Card value={13} card="2" imageIndex={7} overlap = {3}/>,
      <Card value={1} card="3" imageIndex={8} overlap = {4}/>
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.table}>
          North
        </Text>
        <Card suit="clubs" cardName="10" />


        <Player hand={hand} name="Player1"/>
        <Button
          title="Pass"
          style={styles.button}
        />
      </View>
    );
  }
}
export default Game
