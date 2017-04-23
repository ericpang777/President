import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,

} from 'react-native';

import Splash from './app/components/Splash/Splash'
import Game from './app/components/Game/Game'

export default class President extends Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator)
  {
    if(route.name === 'splashPage')
    {
      return <Splash navigator={navigator} />
    }
    else if(route.name === 'gamePage')
    {
      return <Game navigator={navigator} />
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name:'splashPage'}}
        renderScene = {this.renderScene}
        />
    );
  }
}

AppRegistry.registerComponent('President', () => President);
