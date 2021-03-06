import React, { Component } from 'react';

import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default class Card extends Component {

  constructor(props) {
      super(props)
      this.state = {
        //package: this.props.package,
        value: this.props.value,
        imageIndex: this.props.imageIndex,
        overlap: this.props.overlap,
        selected: this.props.selected,
        played: false,
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

  getOverlap(n,selected){
    if(selected == true){
      var top = 0;
      var right = 20 + 40*(n-1)
    }
    else{

      var top = 20;
      var right = 20 + 40*(n-1)
    }
    return{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      height: 150,
      width: 80,
      right: right,
      top: top,
      resizeMode: 'contain'
    };
  }
  render() {
    return(
        <View>
          <TouchableWithoutFeedback onPress={()=> this.props.onPress()}>
            <Image source={this.state.cardImages[this.state.imageIndex]} style={this.getOverlap(this.state.overlap, this.state.selected)}/>
          </TouchableWithoutFeedback>
        </View>
    );
  }

  getValue() {
    return this.state.value;
  }
}
