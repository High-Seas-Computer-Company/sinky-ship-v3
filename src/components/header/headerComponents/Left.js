import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';


const LeftHeader = () => {
  return (
    <Link to='/' component={TouchableOpacity} >
      <MaterialIcons
        name='home'
        color='#3c2829'
        size={32}
      />
    </Link>
  );
}

export default LeftHeader;
