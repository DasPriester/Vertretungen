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
            <List containerStyle={{ marginTop: 0, margin: 0, borderColor: 'rgb(232, 109, 27)' }}>
              <ListItem
                hideChevron
                title="Heute"
                rightTitle="Stunde"
                titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                rightTitleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                containerStyle={{
                  backgroundColor: 'rgb(232, 109, 27)',
                  borderBottomColor: 'rgb(232, 109, 27)',
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
                  borderColor: 'rgb(232, 109, 27)',
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
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}
                      subtitleStyle={{
                        width: 300,
                      }}
                      rightTitleStyle={{
                        color: isFree ? '#3e702d' : '#bbb',
                      }}
                      hideChevron
                      key={index}
                      title={`${subject} ${room ? `in Raum ${room}` : ''} ${
                        isFree ? '\t - \tfällt aus' : ''
                      } `}
                      subtitle={teacher && `bei ${teacher}`}
                      badge={{
                        value: lesson,
                        textStyle: { color: isFree ? '#a5d794' : 'white' },
                        containerStyle: {
                          backgroundColor: isFree ? 'rgb(40, 152, 55)' : 'rgb(232, 109, 27)',
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
