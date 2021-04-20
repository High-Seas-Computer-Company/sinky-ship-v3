import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function GameOver() {
  return (
    <View style={styles.container}>
      <Text>Game Over</Text>

      <Button title="Start New Game vs Computer" onPress={() => Alert.alert('Go to place ships page')} />
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