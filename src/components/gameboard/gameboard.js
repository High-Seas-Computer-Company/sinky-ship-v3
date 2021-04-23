import React, { useState, useEffect } from 'react';

// style
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// redux and components
import { nextGuess } from '../actions/action-helpers.js';
// import { guess } from '../actions/action-helpers.js'
// import Compass from '../compass/Compass.js';

let grid = function () {
  let gridArray = [];
  for (let i = 0; i <= 99; i++) {
    gridArray.push({ name: i, hit: false, miss: false },)
  }
  return gridArray;
}

function targetConverter(int) {
  let letterAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  let letterIndex = Math.floor(int / 10);
  let letter = letterAxis[letterIndex];
  let numeral = int % 10;
  let target = letter + `${numeral}`;

  console.log(target);
  return target;
  // Alert.alert(`Clicked item ${target}`)
}

function taskRunner(item, props) {

  console.log('item: ', item);
  let targetValue = targetConverter(item.name);
  // console.log('this is props.socket', props.socket);
  nextGuess(props.gamePayload, targetValue, item.name, props.socket);
  // props.socket.emit('response', props.game, targetValue);
  // return targetValue;
}
export default function Board(props) {
  // console.log('props: ', props);
  
  const [items, setItems] = useState(grid);
  let [colour, setColour] = useState(false);
  let [bgColour, setBgColour] = useState('#286c9c');

  useEffect(() => {
    setItems(props.gamePayload.displayBoard);
  }, [props.gamePayload]);

  return (
    <>
        <Text style={[styles.infoDisplay]}>Your shot was a {props.gamePayload.missileStatus}</Text>
      {/* <Button title="Your Grid" /> */}
      <FlatGrid
        itemDimension={40}
        data={items}
        style={styles.gridView}
        scrollEnabled={false}
        // staticDimension={300}
        // fixed
        spacing={0}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor="#B9CED5"
            activeOpacity={0.2}
            onPress={() => taskRunner(item, props)}>

            {/*   < View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                   {/* <Text style={styles.itemName}>{item.name}</Text>
             <Text style={styles.itemCode}>{item.code}</Text> 
             </View> */}
            < View
              style={[styles.itemContainer, { backgroundColor: bgColour }]}
              style={[styles.itemValue, { backgroundColor: item.value }]}
            />

          </TouchableHighlight>

        )}
      />
        <Text style={[styles.infoDisplay]}>Computer's shot is a {props.gamePayload.computerGuess}</Text>
      {/* <Compass /> */}
    </>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    // borderRadius: 5,
    borderWidth: 0.25,
    borderColor: '#3c2829',
    padding: 10,
    height: 40,
  },
  itemValue: {
    justifyContent: 'flex-end',
    // borderRadius: 5,
    borderWidth: 0.25,
    borderColor: '#3c2829',
    padding: 10,
    height: 40,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },

  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  infoDisplay: {
    padding: 2,
    borderWidth: 0.5,
    borderColor: '#3c2829',
    borderRadius: 4,
  },
  Hit: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#d29495',
  },
  Miss: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#d29495',
  },
});