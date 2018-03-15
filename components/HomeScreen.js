import React, { Fragment } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Header from './Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    const { screenProps: { grades, selectedGrade: { level, index }, substitutes } } = this.props;
    const { name: grade } = grades[level][index];
    const actualSubstitutes = substitutes[grade];
    return (
      <Fragment>
        <Header title={`Vertretungen - ${grade}`} navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {actualSubstitutes ? (
              <List containerStyle={{ marginBottom: 20 }}>
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
                      rightTitle={lesson}
                    />
                  );
                })}
              </List>
            ) : (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 100, marginBottom: 20 }}>😭</Text>
                <Text>Keine Vertretungen für die {grade}</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
