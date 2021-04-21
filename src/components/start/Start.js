import React from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Image } from 'react-native';
import { NativeRouter, Route, Link, TouchableOpacity } from "react-router-native";
import { Button, Text } from 'react-native-elements';
import ButtonLink from './button/ButtonLink.js';

// import image from '../../../assets/pirateShip.jpg';


export default function Start() {


  return (
    <View style={styles.container}>
      <Text h2>Ready to Sinky Ship?</Text>
      <Image
        source={require('../../../assets/pirateShip.jpg')}
        style={styles.pirateImage}
        PlaceholderContent={<ActivityIndicator />}
      />
      {/* <Button title="Start Game vs Computer" as={Link} to={{ pathname: "/ship-placement" }} /> */}
      <Text h3>HOW TO:</Text>
      <Link
        component={Button}
        to="/ship-placement"
        title="Start Game vs Computer"
        style={styles.buttonOne}
      // activeOpacity={0.8}
      >
      </Link>
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
    marginTop: 20,
  }
});
