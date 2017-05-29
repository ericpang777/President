import React, { Component } from 'react';

import Card from '../Card/Card.js'
import Player from '../Player/Player.js'

export default class GameLogic extends Component {
  constructor() {
    super()
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
      currentPlayerName: 'Player1',
      currentPlayerNum: 1,
      lastPlayedCards : [

      ],
      remainingPlayers : [1,2,3,4]
    }
    startGame();
  }
  //builds hands for all the players
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
    sort(array);
    var lowestOverlap = array.length/2 * -1;
    for(var i = 0; i < array.length; i++) {
      newArray.push(<Card value={array[i][0]} imageIndex={array[i][1]} overlap={lowest+i}/>)
    }
  }

  getActivePlayer() {
    return this.state.activePlayer;
  }

  getLastPlayed() {
    return this.state.lastPlayedCards;
  }

  getNextPlayer() {
  }
  //Sorts the hand in accending order
  sort(){
    var temp = []
    for(let i =0; i<this.state.p1Hand.length; i++){
        temp.push(this.state.p1Hand[i][0])
    }
    temp = temp.sort((a, b) => a - b);

    for(var i =0; i<temp.length;i++){
      if(temp[i]!=this.state.p1Hand[i][0]){

        for(let j = i+1; j<temp.length; j++){
          if(temp[i]==this.state.p1Hand[j][0]){

            let card = this.state.p1Hand[i]
            this.state.p1Hand[i] = this.state.p1Hand[j]
            this.state.p1Hand[j] = card
          }
        }
      }
    }
  }
}
