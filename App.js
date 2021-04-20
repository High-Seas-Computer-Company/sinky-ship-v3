import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

// import component dependancies
import Start from './src/components/start/Start.js'
import ShipPlacement from './src/components/ship-placement/Ship-placement.js'
import GameParle from './src/components/gameplay/Gameplay.js'
import GameOver from './src/components/gameover/Gameover.js'


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Start} />
        <Route path="/ship-placement" component={ShipPlacement} />
        <Route path="/game-parle" component={GameParle} />
        <Route path="/game-over" component={GameOver} />
      </View>
    </NativeRouter >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
