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
import TurnStart from './app/components/TurnStart/TurnStart.js'
import Player from './app/components/Player/Player.js'
import Card from './app/components/Card/Card.js'

export default class President extends Component {
  constructor(props){
    super(props)
    this.renderScene = this.renderScene.bind(this)
    var cards = [
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
    ]
    cards.sort(function(a, b){return 0.5 - Math.random()});
    var playerNames = ["Player1","Player2","Player3","Player4"]

    this.state = {
      deck : cards,
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
      currentPlayerNum:1,
      currentPlayerName: playerNames[0],
      lastPlayedCards : [

      ],
      remainingPlayers : [1,2,3,4],
      gameEnd : false,

      hand: this.getHand(cards.splice(0,9)),
      hand2: this.getHand(cards.splice(0,9)),
      hand3: this.getHand(cards.splice(0,9)),
      hand4: this.getHand(cards.splice(0,9))

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
    var sortedArray = this.sort(array);
    var lowestOverlap = sortedArray.length/2 * -1;
    for(var i = 0; i < sortedArray.length; i++) {
      newArray.push(<Card value={sortedArray[i][0]} imageIndex={sortedArray[i][1]} overlap={lowestOverlap+i}/>)
    }
    return newArray
  }
//recursive method to break down the array
//returns sorted array
  sort(array) {
    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);
    if(length === 1) {return array;}

    return this.merge(this.sort(left), this.sort(right));
  }
  //returns array that is merged of the other two arrays
  merge(left, right) {
    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {
        if(left[0][0] < right[0][0]) {
          result.push(left.shift());
        }
        else {
          result.push(right.shift());
        }
      }
      else if (left.length) {
        result.push(left.shift());
      }
      else {
        result.push(right.shift());
      }
    }
    return result;
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
      return <TurnStart navigator={navigator} player={this.state.currentPlayerName + "  Start"}/>
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
  /*getActivePlaye0r() {
    return this.state.activePlayer;
  }

  getLastPlayed() {
    return this.state.lastPlayedCards;
  }

  getNextPlayer() {
  }*/
}

AppRegistry.registerComponent('President', () => President);
