import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const RightHeader = ({ newGame2 }) => {
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

export default RightHeader;
