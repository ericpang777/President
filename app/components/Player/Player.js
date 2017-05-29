import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet
} from 'react-native';

import Card from '../Card/Card.js'
import styles from '../Player/styles.js'

export default class Player extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hand : this.props.hand,
      rank : 'Neutral',
      name : this.props.name,
      cardImages : [
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
        require('../../images/cards/Joker_of_black.png'),
        require('../../images/cards/Joker_of_red.png')
      ]
    }
  }

  render() {
    return(
      <View style={styles.container}>
        {this.state.hand}
      </View>
    );
  }

}
