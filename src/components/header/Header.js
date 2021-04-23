import React from 'react';
import { Header } from 'react-native-elements';

// Components
import LeftHeader from './headerComponents/Left.js';
import RightHeader from './headerComponents/Right.js';

export default function HeaderComponent({ newGame }) {

  return (
    <>
      <Header
        leftComponent={<LeftHeader />}
        centerComponent={{ text: 'SINKY SHIP', style: { color: '#3c2829', fontSize: 24, fontFamily: 'System', fontWeight: 'bold' } }}
        rightComponent={<RightHeader newGame2={newGame} />}
        containerStyle={{
          backgroundColor: '#b9ced5',
        }}
      />
    </>
  );
}