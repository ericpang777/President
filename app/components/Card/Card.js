
import React, { Component } from 'react';
import {image} from 'react-native';

export default class Card extends Component {
  constructor(value:number,suit:String,cardName:String) {
    super()
    //generate a random number(int) and suit(String)
    //OR we can just have a deck object and randomly order the cards in that object, then we can just give out (numCards) to each player
    //return the image= num + "_of_" + suit + ".png"
  }
  render() {
    <Image source={require('../../images/cards/' + cardName + '_of_' + suit + '.png')}/>

  }
}
