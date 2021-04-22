import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Image } from 'react-native';
import { NativeRouter, Route, Link, TouchableOpacity } from "react-router-native";
import { Button, Text } from 'react-native-elements';
import ButtonLink from './button/ButtonLink.js';

// import image from '../../../assets/pirateShip.jpg';


export default function Start({ newGame3 }) {


  return (
    <View style={styles.container}>
      <Text h2>Ready to Sinky Ship?</Text>
      <Image
        source={require('../../../assets/pirateShip.jpg')}
        style={styles.pirateImage}
        PlaceholderContent={<ActivityIndicator />}
      />
      {/* <Button title="Start Game vs Computer" as={Link} to={{ pathname: "/ship-placement" }} /> */}
      <Text style={styles.h4Style} h4>HOW TO:</Text>
      <FlatList
        scrollEnabled={false}
        data={[
          { key: 'Tap a square to to guess your opponents ship location' },
          { key: 'Tap Blackbeard at anytime to refresh the board with a new game' },
          { key: 'Tap the Home Icon to return here!' },
          { key: 'Tap the button below when you\'re ready to start' }
        ]}
        renderItem={({ item }) => <Text style={styles.textStyle}>{item.key}</Text>}
      />
      <View style={styles.buttonOne}>
        <Link
          component={Button}
          onPress={newGame3}
          to="/ship-placement"
          title="Start Game vs Computer"
          raised={true}
        >
        </Link>
      </View>
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
  pirateImage: {
    width: 400,
    height: 400,
  },
  buttonOne: {
    marginTop: 40,
  },
  textStyle: {
    width: 325,
    textAlign: 'justify',
    marginTop: 15,
  },
  h4Style: {
    marginTop: 20,
  }
});
