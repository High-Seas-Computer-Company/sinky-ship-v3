import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Board from '../gameboard/gameboard.js';

export default function ShipPlacement() {
  return (
    <View style={styles.container}>
      <Text>Ship Placement</Text>
      <Text>Ready to placey ships?</Text>
      <Board />
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
});