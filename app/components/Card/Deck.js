
import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

import Card from '../Card/Card'

export default class Deck extends Component {
  constructor() {
    super()

    const deck = []

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
    hearts = new Card(value,"hearts")
    spades = new Card(value,"spades")
    diamonds = new Card(value,"diamonds")
    clubs = new Card(value,"clubs")

    deck.push(hearts)
    deck.push(spades)
    deck.push(diamonds)
    deck.push(clubs)
  }

  var joker = new Card(14,"black","Joker")
  deck.push(joker)
  joker = new Card(14,"red","Joker")
  deck.push(joker)

  }
  getImage(num:number){
    var card = deck[num]
    return num.getImage()
  }
}
