import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,

} from 'react-native';

import Splash from './app/components/Splash/Splash'
import Game from './app/components/Game/Game.js'
import Setup from './app/components/Setup/Setup.js'
import GameLogic from './app/components/Game/GameLogic.js'
import TurnStart from './app/components/TurnStart/TurnStart.js'

export default class President extends Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
    this.state = {
      deck : [
        [12, 0],[12, 1],[12, 2],[12, 3],
        [13, 4],[13, 5],[13, 6],[13, 7],
        [1, 8],[1, 9],[1, 10],[1, 11],
        [2, 12],[2, 13],[2, 14],[2, 15],
        [3, 16],[3, 17],[3, 18],[3, 19],
        [4, 20],[4, 21],[4, 22],[4, 23],
        [5, 24],[5, 25],[5, 26],[5, 27],
        [6, 28],[6, 29],[6, 30],[6, 31],
        [7, 32],[7, 33],[7, 34],[7, 35],
        [8, 36],[8, 37],[8, 38],[8, 39],
        [9, 40],[9, 41],[9, 42],[9, 43],
        [10, 44],[10, 45],[10, 46],[10, 47],
        [11, 48],[11, 49],[11, 50],[11, 51],
        [14, 52],[14, 53]
      ],
      p1Hand: [],
      p2Hand: [],
      p3Hand: [],
      p4Hand: [],
      players : [
        <Player hand={this.state.p1Hand} name="Player1"/>,
        <Player hand={this.state.p2Hand} name="Player2"/>,
        <Player hand={this.state.p3Hand} name="Player3"/>,
        <Player hand={this.state.p4Hand} name="Player4"/>
      ],
      currentPlayerName: "Player1",
      currentPlayerNum: 1,
      lastPlayedCards : [

      ],
      remainingPlayers : [1,2,3,4],
      gameEnd : false
    }
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
      return <TurnStart navigator={navigator} player={this.state.currentPlayerName} />
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
