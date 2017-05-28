import React, { Component } from 'react';

import {
  AppRegistry,
  Image,
  View
} from 'react-native';

import styles from '../Card/styles.js'

export default class Card extends Component {
  constructor(props) {
    super(props)
    //generate a random number(int) and suit(String)
    //OR we can just have a deck object and randomly order the cards in that object, then we can just give out (numCards) to each player
    //return the image= num + "_of_" + suit + ".png"
  }
  render()
  {
    return(
      <View>
      <Image source={require('../../images/cards/' + this.props.cardName + '_of_' + this.props.suit + '.png')}
       style={styles.card}/>
      </View>
    );
  }
}
