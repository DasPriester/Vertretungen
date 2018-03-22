import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, ButtonGroup, Text } from 'react-native-elements';

import Header from './Header';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Log Out',
  };

  render() {
    const { screenProps: { grades, width, height, setActiveGrade, selectedGrade } } = this.props;
    return (
      <Fragment>
        <Header hideButtons title="Login" />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 7,
                paddingTop: 5,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                borderRadius: 15,
                backgroundColor: 'rgb(232, 109, 27)',
              }}
            >
              <Text h4 style={{ color: 'white' }}>
                Klasse auswählen
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                padding: 20,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 15,
                backgroundColor: 'rgb(180, 180, 180)',
              }}
            >
              <View style={{ width: width - 100 }}>
                {Object.entries(grades).map(([level, gradesInLevel]) => (
                  <ButtonGroup
                    selectedIndex={level === selectedGrade.level ? selectedGrade.index : undefined}
                    onPress={index => setActiveGrade({ level, index })}
                    key={level}
                    buttons={gradesInLevel.map(({ name }) => name)}
                    selectedButtonStyle={{ backgroundColor: 'rgb(0, 168, 255)' }}
                    selectedTextStyle={{ color: 'rgb(232, 109, 27)' }}
                    containerBorderRadius={0}
                    textStyle={{ color: 'white', fontWeight: 'bold' }}
                    containerStyle={{
                      backgroundColor: 'rgb(0, 168, 255)',
                      borderRadius: 10,
                      borderColor: 'transparent',
                    }}
                    innerBorderStyle={{ color: 'white' }}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}
