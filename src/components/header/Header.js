import React from 'react';
import { Header } from 'react-native-elements';
import LeftHeader from './headerComponents/Left.js';
import RightHeader from './headerComponents/Right.js';

export default function HeaderComponent({ newGame }) {

  return (
    <>
      <Header
        leftComponent={<LeftHeader />}
        centerComponent={{ text: 'SINKY SHIP', style: { color: 'black', fontSize: 24, fontFamily: 'System', fontWeight: 'bold' } }}
        rightComponent={<RightHeader newGame2={newGame} />}
        containerStyle={{
          backgroundColor: '#b9ced5',
        }}
      />
    </>
  );
}