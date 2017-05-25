
import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

import styles from '../Card/styles.js'

export default class Card extends Component {
  constructor(value, suit) {
    super()
    this.value = value
    this.suit = suit

    this.cardName = "" + value + '_of_' + suit
    this.cardName = "" + value + '_of_' suit

  }
  getValue(){
    return this.value
  }
  getImage(){

    return '../../images/cards/' + this.cardName + '.png'

    return './images/cards/' + this.cardName + '.png'
  }
}
