import React, { Fragment } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Button, ButtonGroup } from 'react-native-elements';
import Header from './components/Header';
import Header_Login from './components/Header_Login';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    const { screenProps: { grades, selectedGrade: { level, index } } } = this.props;
    const { name } = grades[level][index];
    return <Header title={`Vertretungen - ${name}`} navigation={this.props.navigation} />;
  }
}

const GradeSelectButton = ({ title, onPress }) => (
  <Button
    onPress={onPress}
    title={title}
    buttonStyle={{
      width: 100,
    }}
  />
);

class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
  };

  render() {
    const { screenProps: { grades, width, height, setActiveGrade, selectedGrade } } = this.props;
    return (
      <Fragment>
        <Header_Login title="Login" />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={{ width: width * 0.5 }}>
              {Object.entries(grades).map(([level, gradesInLevel]) => (
                <ButtonGroup
                  selectedIndex={level === selectedGrade.level ? selectedGrade.index : undefined}
                  onPress={index => setActiveGrade(level, index)}
                  key={level}
                  buttons={gradesInLevel.map(({ name }) => name)}
                  selectedButtonStyle={{ backgroundColor: '#3D6DCC' }}
                  selectedTextStyle={{ color: 'white' }}
                />
              ))}
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="LOG IN"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: '#3D6DCC',
                width,
                minHeight: 45,
                height: height / 100 * 7,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
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
