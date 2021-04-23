import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

// Redux
import { connect, useDispatch } from 'react-redux';
import { initialBoards } from '../actions/actions.js';

// Components
import Board from '../gameboard/Gameboard.js';


// Component
export const ShipPlacement = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialBoards({ ...props.game }));
  }, []);

  return (
    <View style={styles.container}>
      <Board socket={props.socket} gamePayload={props.gamePayload} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = (reduxState) => {
  return {
    gameObject: reduxState.gameboards.gameObject,
    playerBoard: reduxState.gameboards.playerBoard,
    computerBoard: reduxState.gameboards.computerBoard,
    shipsPlaced: reduxState.gameboards.shipsPlaced,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialBoards: (payload) => {
      dispatch({ type: 'INITIAL_BOARDS', payload: payload })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipPlacement);
