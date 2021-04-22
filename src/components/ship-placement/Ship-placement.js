import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Board from '../gameboard/gameboard.js';
import { initialBoards, updatePlayerBoard, startNewGame, loadNewGameboards, shipPlacement } from '../actions/actions.js';

import { If } from '../if/If.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ShipPlacement = (props) => {

    let dispatch = useDispatch();

    useEffect(() => {
      dispatch(initialBoards({...props.game}));
    }, []);


  return (
    <View style={styles.container}>
      <Text>Ship Placement</Text>
      <Text>Ready to placey ships?</Text>
      <Board socket={props.socket} game={props.game}/>
    </View >
  );
}


const mapStateToProps = (reduxState) => {
  return {
    gameObject: reduxState.gameboards.gameObject,
    playerBoard: reduxState.gameboards.playerBoard,
    computerBoard: reduxState.gameboards.computerBoard,
    shipsPlaced: reduxState.gameboards.shipsPlaced,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialBoards: (payload) => {
      dispatch({ type: 'INITIAL_BOARDS', payload: payload})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipPlacement);