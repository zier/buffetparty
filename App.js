import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StorybookUI from './storybook';

import { createStackNavigator } from 'react-navigation';
import Home from './app/Screen/Home'
import Login from './app/Screen/Login'

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App = createStackNavigator(
    {
        Login: { screen: Login },
        Home: { screen: Home },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);

// export default App
export default StorybookUI;
