import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Image } from 'react-native';
import { Link } from 'react-router-native';
import { Button, Text } from 'react-native-elements';
import { scale, verticalScale } from 'react-native-size-matters';


// Component
const Start = ({ newGame3 }) => {

  return (
    <View style={styles.container}>
      <Text h2>Ready to Sinky Ship?</Text>
      <Image
        source={require('../../../assets/pirateShip.jpg')}
        style={styles.pirateImage}
        PlaceholderContent={<ActivityIndicator />}
      />
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
        />
      </View>
    </View>
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
    width: scale(300),
    height: verticalScale(275),
  },
  buttonOne: {
    marginTop: 10,
  },
  textStyle: {
    width: scale(260),
    textAlign: 'justify',
    marginTop: 10,
  },
  h4Style: {
    marginTop: 10,
  },
});

export default Start;
