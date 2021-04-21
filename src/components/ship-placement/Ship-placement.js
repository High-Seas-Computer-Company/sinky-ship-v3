import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Board from '../gameboard/gameboard.js';
import { shipPlacement } from '../actions/actions.js';
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
  return (
    <View style={styles.container}>
      <Text>Ship Placement</Text>
      <Text>Ready to placey ships?</Text>
      <Board socket={props.socket}/>
      <If condition={props.shipsPlaced === 0}>
        <Text>Spanish Galleon</Text>
      </If>
      <If condition={props.shipsPlaced === 1}>
        <Text>Dutch Fleut</Text>
      </If>
      <If condition={props.shipsPlaced === 2}>
        <Text>Brigantine</Text>
      </If>
      <If condition={props.shipsPlaced === 3}>
        <Text>Sloop</Text>
      </If>
      <If condition={props.shipsPlaced === 4}>
        <Text>Schooner</Text>
      </If>
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

export default connect(mapStateToProps)(ShipPlacement);