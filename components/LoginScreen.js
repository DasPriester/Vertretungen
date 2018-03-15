import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, ButtonGroup, Text } from 'react-native-elements';

import HeaderLogin from './HeaderLogin';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
  };

  render() {
    const { screenProps: { grades, width, height, setActiveGrade, selectedGrade } } = this.props;
    if (selectedGrade.level && selectedGrade.index) {
      this.props.navigation.navigate('Home');
      return null;
    } else {
      return (
        <Fragment>
          <HeaderLogin title="Login" />
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text h4 style={{ color: '#3D6DCC', marginBottom: 30 }}>
                Klasse auswählen
              </Text>
              <View style={{ width: width * 0.8 }}>
                {Object.entries(grades).map(([level, gradesInLevel]) => (
                  <ButtonGroup
                    selectedIndex={level === selectedGrade.level ? selectedGrade.index : undefined}
                    onPress={index => setActiveGrade({ level, index })}
                    key={level}
                    buttons={gradesInLevel.map(({ name }) => name)}
                    selectedButtonStyle={{ backgroundColor: '#3D6DCC' }}
                    selectedTextStyle={{ color: 'white' }}
                  />
                ))}
              </View>
            </View>
          </View>
        </Fragment>
      );
    }
  }
}
