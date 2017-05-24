
import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

import CardOther from '../Card/CardOther'

export default class Card extends Component {
  constructor() {
    super()

    const deck = []

    var cardName:String
    var value:number

    var hearts:CardOther
    var spades:CardOther
    var diamonds:CardOther
    var clubs:CardOther

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
    hearts = new CardOther(value,"hearts")
    spades = new CardOther(value,"spades")
    diamonds = new CardOther(value,"diamonds")
    clubs = new CardOther(value,"clubs")

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
    return
  }
}
