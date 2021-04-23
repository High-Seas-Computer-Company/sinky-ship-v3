import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';

// Redux
import { nextGuess } from '../actions/action-helpers.js';
// import { guess } from '../actions/action-helpers.js'

// Components
import { If } from '../if/If.js';
import Compass from '../compass/Compass.js';

const grid = () => {
  const gridArray = [];
  for (let i = 0; i <= 99; i++) {
    gridArray.push({ name: i, hit: false, miss: false },)
  }
  return gridArray;
}

const targetConverter = (int) => {
  const letterAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const letterIndex = Math.floor(int / 10);
  const letter = letterAxis[letterIndex];
  const numeral = int % 10;
  const target = letter + `${numeral}`;

  return target;
}


const taskRunner = (item, props) => {

  // console.log('item: ', item);
  let targetValue = targetConverter(item.name);
  nextGuess(props.gamePayload, targetValue, item.name, props.socket);
}


// Component
const Board = (props) => {


  const [items, setItems] = useState(grid);


  useEffect(() => {
    setItems(props.gamePayload.displayBoard);
  }, []);

  useEffect(() => {
    setItems(props.gamePayload.displayBoard);
  }, [props.gamePayload]);


  return (
    <>
      <If condition={props.gamePayload.missileStatus}>
        <Text style={styles.infoDisplay}>Your shot was a {props.gamePayload.missileStatus}</Text>
      </If>
      <FlatGrid
        itemDimension={36}
        data={items}
        style={styles.gridView}
        scrollEnabled={false}
        spacing={0}
        renderItem={({ item }) => (

          <TouchableHighlight
            underlayColor="#B9CED5"
            activeOpacity={0.2}
            onPress={() => taskRunner(item, props)}>
            <View style={[styles.itemValue, { backgroundColor: item.value }]} />
          </TouchableHighlight>

        )}
      />
      <If condition={props.gamePayload.computerGuess}>
        <Text style={styles.infoDisplay}>Computer's shot was a {props.gamePayload.computerGuess}</Text>
      </If>
      <View
        style={{
          flexDirection: 'row',
          height: 110,
          width: 300,
          padding: 5,
          justifyContent: 'center',
        }}>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 60 }}/>
            {/* <View style={{ height: 20 }}/> */}
            {/* <View style={{ height: 20 }}/> */}
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 60 }}/>
            {/* <View style={{ height: 20 }}/>
            <View style={{ height: 20 }}/> */}
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 40 }}/>
            {/* <View style={{ height: 20 }}/> */}
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829' }}/>
          </View>
        </View>
      {/* <Compass /> */}
    </>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    width: 360,
    height: 360,
    flex: 1,
  },
  itemValue: {
    justifyContent: 'flex-end',
    borderWidth: 0.25,
    borderColor: '#3c2829',
    padding: 10,
    height: 36,
  },
  infoDisplay: {
    marginTop: 10,
    padding: 2,
    borderWidth: 0.5,
    borderColor: '#3c2829',
    borderRadius: 4,
  },
  hit: {
    backgroundColor: '#d29495',
  },
  miss: {
    backgroundColor: '#b9ced5',
  },
});

export default Board;
