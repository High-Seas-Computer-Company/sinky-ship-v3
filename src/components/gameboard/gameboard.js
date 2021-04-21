import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import Compass from '../compass/Compass.js';

let grid = function () {
  let gridArray = [];
  for (let i = 0; i <= 99; i++) {
    gridArray.push({ name: i },)
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

function taskRunner(item) {

  console.log('item: ', item);
  return targetConverter(item.name);
}
export default function Board() {
  // console.log('props: ', props);
  const [items, setItems] = useState(grid);
  let [colour, setColour] = useState(false);
  let [bgColour, setBgColour] = useState('#286c9c');

  return (
    <>
      <Button title="Your Grid" />
      <FlatGrid
        itemDimension={40}
        data={items}
        style={styles.gridView}
        scrollEnabled={false}
        // staticDimension={300}
        // fixed
        spacing={0}
        renderItem={({ item }) => (
          <TouchableOpacity

            onPress={() => taskRunner(item)}>

            {/*   < View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                   {/* <Text style={styles.itemName}>{item.name}</Text>
             <Text style={styles.itemCode}>{item.code}</Text> 
             </View> */}
            < View
              className={item.name}
              style={[styles.itemContainer, { backgroundColor: bgColour }]}
            />

          </TouchableOpacity>

        )}
      />
      <Compass />
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
    borderColor: 'black',
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
});