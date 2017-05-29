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
      player : this.props.player
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
          title={this.state.player}
          style={styles.button}
          onPress={() => this.navigate('gamePage')}>
        </Button>
      </View>
    );
  }
}
