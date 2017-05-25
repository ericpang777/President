import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

class Card extends Component {
  constructor(props) {
      super(props)
      this.state = {
        card : this.props.card,
        value : this.props.value,
        imageIndex : this.props.imageIndex
      }
  }
}

export default class Hand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hand : this.props.hand,
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
        require('../../images/cards/Joker_of_red.png'),
        require('../../images/cards/Joker_of_black.png')
      ]
    }
  }

  render() {
    return(
      <View>
        {this.state.hand}
      </View>
    );
  }
}
