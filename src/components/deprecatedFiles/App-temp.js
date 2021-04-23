// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
// import { NativeRouter, Route, Link } from 'react-router-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import { Provider } from 'react-redux';
// import store from './src/store/index.js';


// // import component dependancies
// import HeaderComponent from './src/components/header/Header.js';
// import Start from './src/components/start/Start.js';
// import ShipPlacement from './src/components/ship-placement/Ship-placement.js';
// import GameParle from './src/components/gameplay/Gameplay.js';
// import GameOver from './src/components/gameover/Gameover.js';

// // socket stuffy stuff
// import { startSocketIO, startGame, setup1Listener, guessListener, gameOverListener } from './src/components/socket-stuff/socket.js';

// export default function App() {

//   useEffect(() => {
//     startSocketIO();
//   }, []);

//   useEffect(() => {
//     setup1Listener();
//   }, []);

//   const newGame = () => {
//     startGame();
//   };

//   return (
//       <NativeRouter>
//         <SafeAreaView style={styles.safeArea}>
//           <View style={styles.container}>
//             <Provider store={store}>
//               <ScrollView scrollEnabled={false}>
//                 <HeaderComponent newGame={newGame} />
//                 {/* <Button
//                   onPress={newGame}
//                   title="New Game"
//                   color="#841584"
//                   accessibilityLabel="Start a new game of Sinky Ship"
//                 /> */}
//                 <Route exact path="/" component={Start} />
//                 <Route path="/ship-placement" component={ShipPlacement} />
//                 <Route path="/game-parle" component={GameParle} />
//                 <Route path="/game-over" component={GameOver} />
//               </ScrollView>
//             </Provider>
//           </View>
//         </SafeAreaView>
//       </NativeRouter >
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#b9ced5',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
