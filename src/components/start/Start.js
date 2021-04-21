import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link, TouchableOpacity } from "react-router-native";


export default function Start() {


  return (
    <View style={styles.container}>
      <Text>Sinky Ship Mobile</Text>

      <Text>Ready to Sinky Ship?</Text>
      {/* <Button title="Start Game vs Computer" as={Link} to={{ pathname: "/ship-placement" }} /> */}
      <Link
        to="/ship-placement"
      // component={TouchableOpacity}
      // activeOpacity={0.8}
      >
        <Text>Start Game vs Computer</Text>
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
});
