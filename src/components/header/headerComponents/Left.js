import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

export default function LeftHeader() {

  return (
    <Link to='/' component={TouchableOpacity} >
      <MaterialIcons
        name='home'
        color='black'
        size={32}
      />
    </Link>
  );
}