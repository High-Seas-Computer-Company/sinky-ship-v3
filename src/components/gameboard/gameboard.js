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

  let hitArray = ['red', 'white', 'white', 'white', 'grey', 'white', 'while', 'white', 'white', 'white', 'white', 'orange', 'white', 'white', 'white', 'white'];
  // console.log('props: ', props);
  let hitObject = { sl1: hitArray[0], sl2: hitArray[1], sc1: hitArray[2], sc2: hitArray[3], br1: hitArray[4], br2: hitArray[5], br3: hitArray[6], df1: hitArray[7], df2: hitArray[8], df3: hitArray[9], df4: hitArray[10], sg1: hitArray[11], sg2:hitArray[12], sg3: hitArray[13], sg4: hitArray[14], sg5: hitArray[15] };

  const [items, setItems] = useState(grid);

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
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            width: 20,
            margin: 10,
          }}>
          <View style={{ height: 20 }} />
          <View style={{ height: 20 }} />
          <View style={{ height: 20 }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            width: 20,
            margin: 10,
          }}>
          <View style={{ height: 20 }} />
          <View style={{ height: 20 }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            width: 20,
            margin: 10,
          }}>
          <View style={{ height: 20 }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            width: 20,
            margin: 10,
          }}>
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
          <View style={{ height: 20, borderWidth: 1, borderColor: 'black' }} />
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
});

export default Board;
