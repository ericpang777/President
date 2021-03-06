/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,

} from 'react-native';

import Splash from './app/components/Splash/Splash'
import Game from './app/components/Game/Game'
import Setup from './app/components/Setup/Setup'
import TurnStart from './app/components/TurnStart/TurnStart'
import GameLogic from './app/components/Game/GameLogic'

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
    else if (route.name === 'setupPage')
    {
      return <Setup navigator={navigator} />
    }
    else if(route.name === 'gamePage')
    {
      return <Game navigator={navigator} />
    }
    else if(route.name === 'turnstart')
    {
      return <TurnStart navigator={navigator} player='Player 1' />
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name:'splashPage'}}
        renderScene = {this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('President', () => President);
