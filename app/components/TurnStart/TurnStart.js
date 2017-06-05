import React, { Component } from 'react';

import {
  View,
  Button
} from 'react-native';

import styles from '../TurnStart/styles.js'

export default class TurnStart extends Component {

  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state = {
      playerName : this.props.playerName,
      player : this.props.player,
      playerNum: this.props.playerNum

    }
  }

  navigate(name)
  {
    this.props.navigator.push({name})
  }

  render() {
    return(
      <View style={styles.container}>
        <Button
          title={this.state.playerName}
          style={styles.button}
          onPress={() => this.navigate('gamePagePass')}>
        </Button>
      </View>
    );
  }
}
