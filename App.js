import React, { Fragment } from 'react';
import { Platform, StyleSheet, View, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import Header from './components/Header';
import Header_Login from './components/Header_Login';

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
class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
  };

  render() {
    const { screenProps } = this.props;
    return (
      <Fragment>
        <Header_Login title="Login" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button
            title="LOG IN"
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: '#3D6DCC',
              width: screenProps.width,
              minHeight: 45,
              height: screenProps.height / 100 * 7,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 0,
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </Fragment>
    );
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
