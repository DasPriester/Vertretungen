import React from 'react';
import { Platform, StyleSheet, View, Dimensions, TouchableHighlight } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';

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

const SettingsButton = props => (
  <TouchableHighlight onPress={() => props.navigation.navigate('DrawerOpen')}>
    <View>
      <Icon name={props.icon} color={props.color} />
    </View>
  </TouchableHighlight>
);

const MenuButton = props => (
  <View>
    <Icon name={props.icon} color={props.color} />
  </View>
);

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Back',
  };

  render() {
    return (
      <Header
        leftComponent={<MenuButton icon="menu" color="white" />}
        centerComponent={{
          text: `Vertretungen - ${varClass}`,
          style: { color: '#fff' },
        }}
        rightComponent={
          <SettingsButton navigation={this.props.navigation} icon="settings" color="white" />
        }
      />
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
  };
  render() {
    return (
      <Header
        leftComponent={<MenuButton icon="menu" color="white" />}
        centerComponent={{
          text: `Vertretungen - ${varClass}`,
          style: { color: '#fff' },
        }}
        rightComponent={
          <SettingsButton navigation={this.props.navigation} icon="settings" color="white" />
        }
      />
    );
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
