import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';
export default class Player extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hand : this.props.hand,
      rank : 'neutral',
      name : this.props.name
    }
  }

  render() {
    return(
      <View>
        {
          this.state.hand.map((card) => {
            return (<Image source={card} key={card.imageIndex}/>);
          })
        }
      </View>
    );
  }

}
