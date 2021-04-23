import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import * as Speech from 'expo-speech';

// Sockety Sockets
import io from 'socket.io-client';

// Reduxy Redux
import { startNewGame, } from './src/components/actions/actions.js';
import store from './src/store-vanilla/index.js';
import { Provider } from 'react-redux';

// Componenty Components
import HeaderComponent from './src/components/header/Header.js';
import Start from './src/components/start/Start.js';
import ShipPlacement from './src/components/ship-placement/Ship-placement.js';
import GameParley from './src/components/gameplay/Gameplay.js';
import GameOver from './src/components/gameover/Gameover.js';
import If from './src/components/if/If.js';

const serverUrl = 'https://sinky-ship-v3.herokuapp.com/';
// const serverUrl = 'http://localhost:3000';

export default function App(props) {


  function displayGridGenerator() {
    const displayArray = [];

    for (let i = 0; i < 100; i++) {
      displayArray[i] = { name: i, value: 'blue' };
    }
    return displayArray;
  }

  let initialDisplay = displayGridGenerator();

  let [vocal, setVocal] = useState('');
  let [gameComplete, setGameComplete] = useState('no');

  let [gamePayload, setGamePayload] = useState({displayBoard: initialDisplay, missileStatus: 'Miss', computerGuess: 'Miss'});

  let [socket, setSocket] = useState(io.connect(serverUrl, {
    transports: ['websocket'],
    jsonp: false
  }));

  const speak = (result) => {
    const thingToSay = result;
    Speech.speak(thingToSay);
  };

  const theme = {
    colors: {
      primary: '#143B4C'
    }
  }

  useEffect(() => {

    socket.on('guess', (payload) => {
      setGamePayload({ ...payload });
      setVocal(payload.missileStatus);
      speak(payload.missileStatus);
    });

    socket.on('game-over', (payload) => {
      console.log('Winner: ', payload.winner);
      // setGamePayload({ ...payload });
      setGameComplete(payload.winner);
      speak(`Game Over. Winner, ${payload.winner}`);
    });

    socket.on('disconnect', () => {
      console.log('connection to server lost');
    })

  }, []);

  const newGame = () => {
    startNewGame();
    socket.emit('new-game');
  };

  return (
    <Provider store={store}>
      <NativeRouter>
        <SafeAreaView style={styles.safeArea}>
          <ThemeProvider theme={theme}>
            <View style={styles.container}>
              <ScrollView scrollEnabled={false}>
                <HeaderComponent newGame={newGame} />
                <Route exact path="/" render={(props) => (
                  <Start newGame3={newGame} />
                )} />
                <Route path="/ship-placement" render={(props) => (
                  <ShipPlacement {...props} socket={socket} gamePayload={gamePayload} />
                )} />
                <Route path="/game-parley" component={GameParley} />
                {/* <If condition={!gameComplete === 'no'} >
                <GameOver newGame={newGame} />
                </If> */}
              </ScrollView>
            </View>
          </ThemeProvider>

        </SafeAreaView>
      </NativeRouter >
    </Provider>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#b9ced5',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

