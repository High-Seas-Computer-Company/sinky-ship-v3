import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//import GridButton from '../struggleStuff/Struggle-stuff.js'

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
      <View style={styles.arrowBox}>
        <TouchableOpacity>
          <AntDesign name="caretup" size={42} color="black" />
        </TouchableOpacity>
        <View style={styles.arrows}>
          <TouchableOpacity>
            <AntDesign name="caretleft" size={42} color="black" style={{ marginRight: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="caretright" size={42} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <AntDesign name="caretdown" size={42} color="black" />
        </TouchableOpacity>
      </View>
      {/* <FlatGrid
      itemDimension={10}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      style={styles.miniGrid}
      renderItem={() => (<View style={{ borderWidth: .25, borderColor: 'black' }} />)}
      /> */}
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
  arrows: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  arrowBox: {
    backgroundColor: '#D29495',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 69,
  },
  miniGrid: {
    backgroundColor: 'bisque',
    height: 70,
    // borderWidth: .25,
    // borderColor: 'black',
  }
});