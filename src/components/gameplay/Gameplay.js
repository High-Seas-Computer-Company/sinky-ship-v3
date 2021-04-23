import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, Text } from 'react-native-elements';


const GameParle = () => {
  return (
    <View style={styles.container}>
      <Text>Game Play</Text>
      <Text>Ready to gamey play?</Text>
      <Button title="Start Game vs Computer" onPress={() => Alert.alert('Go to place ships page')} />
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

export default GameParle;
