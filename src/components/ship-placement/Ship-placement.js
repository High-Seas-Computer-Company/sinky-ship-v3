import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { NativeRouter, Route, Link } from "react-router-native";
import Board from '../gameboard/gameboard.js';
import { initialBoards, updatePlayerBoard, startNewGame, loadNewGameboards, shipPlacement } from '../actions/actions.js';

import { If } from '../if/If.js';


export const ShipPlacement = (props) => {

    let dispatch = useDispatch();

    useEffect(() => {
      dispatch(initialBoards({...props.game}));
    }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Ship Placement</Text>
      <Text style={styles.textColor}>Ready to placey ships?</Text>
      <Board socket={props.socket} game={props.game}/>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#3c2829',
  }
});

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