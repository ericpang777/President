import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';

import Splash from './app/components/Splash/Splash'
import Game from './app/components/Game/Game.js'
import Setup from './app/components/Setup/Setup.js'
import GameLogic from './app/components/Game/GameLogic.js'
import TurnStart from './app/components/TurnStart/TurnStart.js'
import Player from './app/components/Player/Player.js'
import Card from './app/components/Card/Card.js'

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
      /*
      p1Hand: [],
      p2Hand: [],
      p3Hand: [],
      p4Hand: [],
      players : [
        <Player hand={this.state.p1Hand} name="Player1"/>,
        <Player hand={this.state.p2Hand} name="Player2"/>,
        <Player hand={this.state.p3Hand} name="Player3"/>,
        <Player hand={this.state.p4Hand} name="Player4"/>
      ],*/
      currentPlayerName: "Player1",
      currentPlayerNum: 1,
      lastPlayedCards : [

      ],
      remainingPlayers : [1,2,3,4],
      gameEnd : false,
      hand : [
          <Card value={12} imageIndex={0} overlap = {-4}/>,
          <Card value={12} imageIndex={1} overlap = {-3}/>,
          <Card value={12} imageIndex={2} overlap = {-2}/>,
          <Card value={12} imageIndex={3} overlap = {-1}/>,
          <Card value={13} imageIndex={4} overlap = {0}/>,
          <Card value={13} imageIndex={5} overlap = {1}/>,
          <Card value={13} imageIndex={6} overlap = {2}/>,
          <Card value={13} imageIndex={7} overlap = {3}/>,
          <Card value={1} imageIndex={8} overlap = {4}/>
        ]
    }
  }

  startGame() {
      this.state.deck.sort(function(a, b){return 0.5 - Math.random()});

      for(let j = 0; j < 13; j++) {
        this.state.p1Hand.push(this.state.deck[j])
      }
      for(let j = 0; j < 13; j++) {
        this.state.p2Hand.push(this.state.deck[j+13])
      }
      for(let j = 0; j < 13; j++) {
        this.state.p3Hand.push(this.state.deck[j+26])
      }
      for(let j = 0; j < 13; j++) {
        this.state.p4Hand.push(this.state.deck[j+39])
      }
  }

  getHand(array) {
    var newArray = [];
    var sortedArray = sort(array);
    var lowestOverlap = sortedArray.length/2 * -1;
    for(var i = 0; i < sortedArray.length; i++) {
      newArray.push(<Card value={sortedArray[i][0]} imageIndex={sortedArray[i][1]} overlap={lowest+i}/>)
    }
  }

  sort() {
    var temp = []
    for(let i =0; i<array.length; i++){
        temp.push(array[i][0])
    }
    temp = temp.sort((a, b) => a - b);

    for(var i =0; i<temp.length;i++){
      if(temp[i]!=array[i][0]){

        for(let j = i+1; j<temp.length; j++){
          if(temp[i]==array[j][0]){

            let card = array[i]
            array[i] = array[j]
            array[j] = card
          }
        }
      }
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
      return <Game navigator={navigator} player={this.state.hand}/>
    }
    else if(route.name === 'turnstart')
    {
      return <TurnStart navigator={navigator} player="Player"/>
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
