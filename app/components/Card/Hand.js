import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

export default class Hand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hand : this.props.hand

    }
  }
}
