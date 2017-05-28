import React, { Component } from 'react';

import {
  View,
  Button
} from 'react-native';

import styles from '../TurnStart/styles.js'

export default class TurnStart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player : this.props.player
    }
  }

  render() {
    return(
      <View>
        <Button
          title={this.state.player}
          style={styles.button}
        />
      </View>
    );
  }
}
