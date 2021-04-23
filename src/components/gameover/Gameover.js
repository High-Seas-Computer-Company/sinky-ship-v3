import React, { useState } from 'react';
import { StyleSheet, View, Alert, Modal, TouchableHighlight } from 'react-native';
import { Button, Text } from 'react-native-elements';


const GameOver = (props) => {

  const [modalVisible, setModalVisible] = useState(true);
  if (!props.gameComplete === 'no') {
    setModalVisible(true);
  }

  return (
    <View style={styles.centeredView}>
      <Text style={styles.modalText}>Winner: {props.gameComplete}</Text>
      <TouchableHighlight
        style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
        onPress={() => {
          setModalVisible(!modalVisible);
          props.newGame();
        }}>
        <Text style={styles.textStyle}>Try another game?</Text>
      </TouchableHighlight>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Winner: {props.gameComplete}</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
                props.newGame();
              }}>
              <Text style={styles.textStyle}>Try another game?</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Head ashore</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default GameOver;
