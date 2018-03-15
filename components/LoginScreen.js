import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';

import HeaderLogin from './HeaderLogin';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
  };

  render() {
    const { screenProps: { grades, width, height, setActiveGrade, selectedGrade } } = this.props;
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
