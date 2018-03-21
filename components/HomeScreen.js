import React, { Fragment } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

import Header from './Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    const {
      screenProps: { grades, selectedGrade: { level, index }, substitutes, setActiveGrade },
    } = this.props;
    const { name: grade } = grades[level][index];
    const actualSubstitutes = substitutes[grade];
    return (
      <Fragment>
        <Header title={`Vertretungen - ${grade}`} navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          {actualSubstitutes ? (
            <List containerStyle={{ marginTop: 0, margin: 0, borderColor: 'rgb(180, 180, 180)' }}>
              <ListItem
                hideChevron
                title="Heute"
                rightTitle="Stunde"
                titleStyle={{ color: 'white' }}
                rightTitleStyle={{ color: 'white' }}
                containerStyle={{
                  backgroundColor: 'rgb(180, 180, 180)',
                  borderBottomColor: 'rgb(180, 180, 180)',
                  height: 38,
                }}
              />
            </List>
          ) : (
            undefined
          )}
          <View style={{ flex: 1 }}>
            {actualSubstitutes ? (
              <List
                containerStyle={{
                  marginTop: 0,
                  marginBottom: 20,
                  borderColor: 'rgb(180, 180, 180)',
                }}
              >
                {actualSubstitutes.map(({ teacher, lesson, isFree, subject, room }, index) => {
                  return (
                    <ListItem
                      containerStyle={{
                        backgroundColor: isFree ? '#a5d794' : undefined,
                        borderBottomColor: isFree ? '#68a753' : '#bbb',
                      }}
                      titleStyle={{
                        width: 300,
                      }}
                      subtitleStyle={{
                        width: 300,
                      }}
                      rightTitleStyle={{
                        color: isFree ? '#3e702d' : '#bbb',
                      }}
                      hideChevron
                      key={index}
                      title={`Fach: ${subject} ${room ? `Raum: ${room}` : ''}`}
                      subtitle={teacher && `Lehrer: ${teacher}`}
                      badge={{
                        value: lesson,
                        textStyle: { color: isFree ? '#a5d794' : 'white' },
                        containerStyle: {
                          backgroundColor: isFree ? 'rgb(40, 152, 55)' : 'rgb(180, 180, 180)',
                        },
                      }}
                    />
                  );
                })}
              </List>
            ) : (
              <Fragment>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 100, marginBottom: 20 }}>😭</Text>
                  <Text>Keine Vertretungen für die {grade}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 50 }}>
                  <Button
                    buttonStyle={{
                      backgroundColor: '#456FC6',
                      width: 300,
                      height: 45,
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 5,
                    }}
                    title="Zurück"
                    onPress={() => setActiveGrade()}
                  />
                </View>
              </Fragment>
            )}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
