import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import component dependancies
import Start from './src/components/start/Start.js';
import ShipPlacement from './src/components/ship-placement/Ship-placement.js';
import GameParle from './src/components/gameplay/Gameplay.js';
import GameOver from './src/components/gameover/Gameover.js';

// socket stuffy stuff
import { startSocketIO, startGame } from './src/components/socket-stuff/socket.js';

export default function App() {

  useEffect(() => {
    startSocketIO();
  }, []);

  const newGame = () => {
    startGame();
    console.log('new game request should have fired...');
  };

  return (
    <NativeRouter>
      <SafeAreaView style={styles.random} />
      <SafeAreaView style={styles.container}>
        <Button
          onPress={newGame}
          title="New Game"
          color="#841584"
          accessibilityLabel="Start a new game of Sinky Ship"
        />
        <Route exact path="/" component={Start} />
        <Route path="/ship-placement" component={ShipPlacement} />
        <Route path="/game-parle" component={GameParle} />
        <Route path="/game-over" component={GameOver} />
      </SafeAreaView>
    </NativeRouter >
  );
}

const styles = StyleSheet.create({
  random: {
    flex: 0,
    backgroundColor: '#b9ced5',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
