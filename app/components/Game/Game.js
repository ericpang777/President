
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
      <Card value={10} card="12" imageIndex={0} overlap = {-4}/>,
      <Card value={10} card="12" imageIndex={1} overlap = {-3}/>,
      <Card value={10} card="12" imageIndex={2} overlap = {-2}/>,
      <Card value={10} card="12" imageIndex={3} overlap = {-1}/>,
      <Card value={10} card="12" imageIndex={4} overlap = {0}/>,
      <Card value={10} card="12" imageIndex={5} overlap = {1}/>,
      <Card value={10} card="12" imageIndex={6} overlap = {2}/>,
      <Card value={10} card="12" imageIndex={7} overlap = {3}/>,
      <Card value={10} card="12" imageIndex={8} overlap = {4}/>
    ]

    var otherHand = [
      [10, 12, 0, -4],
      [10, 12, 1, -3],
      [10, 12, 2, -2],
      [10, 12, 3, -1],
      [10, 12, 4, 0],
      [10, 12, 5, 1],
      [10, 12, 6, 2],
      [10, 12, 7, 3],
      [10, 12, 8, 4]
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.table}>
          North
        </Text>
        <Card suit="clubs" cardName="10" />


        <Player hand={otherHand} name="Player1"/>
        <Button
          title="Pass"
          style={styles.button}
        />
        {/*}
        <Card value={10} card="12" imageIndex={0} overlap = {-4}/>
        <Card value={10} card="12" imageIndex={1} overlap = {-3}/>
        <Card value={10} card="12" imageIndex={2} overlap = {-2}/>
        <Card value={10} card="12" imageIndex={3} overlap = {-1}/>
        <Card value={10} card="12" imageIndex={4} overlap = {0}/>
        <Card value={10} card="12" imageIndex={5} overlap = {1}/>
        <Card value={10} card="12" imageIndex={6} overlap = {2}/>
        <Card value={10} card="12" imageIndex={7} overlap = {3}/>
        <Card value={10} card="12" imageIndex={8} overlap = {4}/>
        */}
      </View>
    );
  }
}
export default Game
