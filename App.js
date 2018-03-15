import React, { Fragment } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import SettingsScreen from './components/SettingsScreen';

const GradeSelectButton = ({ title, onPress }) => (
  <Button
    onPress={onPress}
    title={title}
    buttonStyle={{
      width: 100,
    }}
  />
);

export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    LogOut: {
      screen: LoginScreen,
    },
  },
  { initialRouteName: 'LogOut' }
);
