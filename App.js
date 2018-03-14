import React from 'react';
import { Platform, StyleSheet, View, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Header from './components/Header';

const varClassList = [
  ['5A', '5B', '5C', '5D'],
  ['6A', '6B', '6C', '6D'],
  ['7A', '7B', '7C', '7D'],
  ['8A', '8B', '8C', '8D'],
  ['8A', '8B', '8C', '8D'],
  ['9A', '9B', '9C', '9D'],
  ['EF'],
  ['Q1'],
  ['Q2'],
];
const varClass = varClassList[0][0];

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return <Header title={`Vertretungen - ${varClass}`} navigation={this.props.navigation} />;
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Einstellungen',
  };
  render() {
    return <Header title="Einstellungen" navigation={this.props.navigation} />;
  }
}

export default ({ width }) =>
  DrawerNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Settings: {
        screen: SettingsScreen,
      },
    },
    { drawerWidth: width / 100 * 65 }
  );
