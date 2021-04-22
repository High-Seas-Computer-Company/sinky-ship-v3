import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function RightHeader({ newGame2 }) {
// console.log('new game', newGame2);

  return (
    <TouchableOpacity
      onPress={newGame2}
    >
      <MaterialCommunityIcons
        name='pirate'
        color='#3c2829'
        size={32}
      />
    </TouchableOpacity>
  );
}