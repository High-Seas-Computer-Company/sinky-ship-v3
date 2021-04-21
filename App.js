import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { initialBoards, updatePlayerBoard, startNewGame, loadNewGameboards, shipPlacement } from './src/components/actions/actions.js';
import store from './src/store-vanilla/index.js';
import { Provider } from 'react-redux';

import HeaderComponent from './src/components/header/Header.js';
import Start from './src/components/start/Start.js';
import ShipPlacement from './src/components/ship-placement/Ship-placement.js';
import GameParle from './src/components/gameplay/Gameplay.js';
import GameOver from './src/components/gameover/Gameover.js';

const serverUrl = 'https://sinky-ship.herokuapp.com/sinky-ship';

export default function App() {
  let [socket, setSocket] = useState('');

  useEffect(() => {
    socket = io.connect(serverUrl, {
      transports: ['websocket'],
      jsonp: false
    });
    socket.on('game-setup1', (payload) => {
      dispatch(initialBoards(payload));
      // dispatch(shipPlacement(payload, payload['Spanish Galleon']));
    });
  }, []);



  const newGame = () => {
    startNewGame();
  };

  return (
    <Provider store={store}>
      <NativeRouter>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <ScrollView scrollEnabled={false}>
              <HeaderComponent newGame={newGame} />
              <Route exact path="/" component={Start} />
              <Route path="/ship-placement" render={(props) => (
                <ShipPlacement {...props} socket={socket} />
              )} />
              <Route path="/game-parle" component={GameParle} />
              <Route path="/game-over" component={GameOver} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </NativeRouter >
    </Provider>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    gameObject: reduxState.gameObject,
    playerBoard: reduxState.gameboards.playerBoard,
    computerBoard: reduxState.gameboards.computerBoard,
  }
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

