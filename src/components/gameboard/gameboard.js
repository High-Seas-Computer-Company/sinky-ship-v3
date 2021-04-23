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

  // console.log(target);
  return target;
  // Alert.alert(`Clicked item ${target}`)
}


function taskRunner(item, props) {
  
  // console.log('item: ', item);
  let targetValue = targetConverter(item.name);
  // console.log('this is props.socket', props.socket);
  nextGuess(props.gamePayload, targetValue, item.name, props.socket);
  // props.socket.emit('response', props.game, targetValue);
  // return targetValue;
}
export default function Board(props) {
  let hitArray = ['red', 'white', 'white', 'white', 'grey', 'white', 'while', 'white', 'white', 'white', 'white', 'orange', 'white', 'white', 'white', 'white'];
  // console.log('props: ', props);
  let hitObject = { sl1: hitArray[0], sl2: hitArray[1], sc1: hitArray[2], sc2: hitArray[3], br1: hitArray[4], br2: hitArray[5], br3: hitArray[6], df1: hitArray[7], df2: hitArray[8], df3: hitArray[9], df4: hitArray[10], sg1: hitArray[11], sg2:hitArray[12], sg3: hitArray[13], sg4: hitArray[14], sg5: hitArray[15] };
  const [items, setItems] = useState(grid);
  let [colour, setColour] = useState(false);
  let [bgColour, setBgColour] = useState('#286c9c');

  function playerShipHitter(array, guess) {
    if(guess === 'Hit') {
      for(let i = 0 ; i < array.length ; i++) {
        if(array[i] !== 'red') {
          hitArray[i] = 'red';
          console.log(hitArray);
          return hitArray;
        }
      }
      
    }
    return;
  }

  useEffect(() => {
    setItems(props.gamePayload.displayBoard);
    playerShipHitter(hitArray, props.gamePayload.computerGuess);
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
            <View style={{ height: 20 }}/>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sl1 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sl2 }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sc1 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sc2 }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.br1 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.br2 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.br3 }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 20 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.df1 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.df2 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.df3 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.df4 }}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: 100,
              width: 20,
              margin: 10,
            }}>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sg1 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sg2 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sg3 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sg4 }}/>
            <View style={{ height: 20, borderWidth: 1, borderColor: '#3c2829', backgroundColor: hitObject.sg5 }}/>
          </View>
        </View>
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