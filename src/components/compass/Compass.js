import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Component
const Compass = () => {
  return (
    <>
      <View style={styles.arrowBox}>
        <TouchableOpacity>
          <AntDesign name="caretup" size={42} color="black" />
        </TouchableOpacity>
        <View style={styles.arrows}>
          <TouchableOpacity>
            <AntDesign name="caretleft" size={42} color="black" />
          </TouchableOpacity>
          <View style={{ width: 40 }} />
          <TouchableOpacity>
            <AntDesign name="caretright" size={42} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <AntDesign name="caretdown" size={42} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default Compass;