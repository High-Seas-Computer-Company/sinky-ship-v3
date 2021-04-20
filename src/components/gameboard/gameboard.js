import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

let grid = function () {
  let gridArray = [];
  for (let i = 1; i <= 100; i++) {
    gridArray.push({ name: i, code: '#3498db' },)
  }
  return gridArray;
}

export default function Board() {
  const [items, setItems] = React.useState(grid);

  return (
    <>
      <FlatGrid
        itemDimension={40}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={0}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Alert.alert(`Clicked item ${item.name}`)}>
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              {/* <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
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