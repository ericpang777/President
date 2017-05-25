import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Slider
} from 'react-native';

import styles from '../Setup/styles.js'

class Setup extends Component {
  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  state = {
     nextPlayer: 2
   };

  navigate(name)
  {
    this.props.navigator.push({name})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Select the number of player in the game
        </Text>
        <Text> Players: {this.state.nextPlayer}</Text>
        <Slider
          style={styles.slider}
          minimumValue={2}
          maximumValue={6}
          step={1}
          onValueChange={(nextPlayer) => this.setState({nextPlayer: nextPlayer})} />
        <Button
          title="Start Game"
          style={styles.button}
          onPress={() => this.navigate('gamePage')}
        />
      </View>
    );
  }
}
/*title: 'Players',
render(): React.Element<any> {
return <Slider step={1.00} />;
}

//Inside render method return statement
<Slider
 {...this.props}
 onSlidingComplete={(value) => this.setState({
     slideCompletionValue: value,
     slideCompletionCount: this.state.slideCompletionCount + 1})}/>
<Text>
 Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
</Text>*/

//https://stackoverflow.com/questions/36660434/how-to-create-slider-in-react-native

export default Setup
