import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from './components/Appheader';
import db from './config.js';
import HomeScreen from './screens/Homescreen';
import SubmitScreen from './screens/Submitscreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SubmitScreen: SubmitScreen,
});

const AppContainer = createAppContainer(AppNavigator);
