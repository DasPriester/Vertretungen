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
    tlib = {
      M: 'Mathe',
      D: 'Deutsch',
      EKbi: 'Erdkunde (Bilingual)',
      KR: 'Religion (Katholisch)',
      ER: 'Religion (Evangelisch)',
      GEbi: 'Geschichte (Bilingual)',
      PP: 'Philosophie',
      PL: 'Philosophie',
      PH: 'Physik',
      GE: 'Geschichte',
      KU: 'Kunst',
      MU: 'Musik',
      BI: 'Biologie',
      NW: 'Naturwissenschaften',
      VF_M: 'Mathe (Vertiefung)',
      VF_D: 'Deutsch (Vertiefung)',
      InFö: 'Individuelle Förderung (InFö)',
      SO: 'Spanisch',
      EK: 'Erdkunde',
    };
    GKLKtranslate = toAnalyse => {
      switch (toAnalyse) {
        case 'GK':
          return 'Grundkurs';
          break;
        case 'LK':
          return 'Leistungskurs';
          break;
      }
    };
    translate = subject => {
      if (subject.length >= 3) {
        if (subject.charAt(subject.length - 3) === '-') {
          if (tlib[subject.substring(0, subject.length - 3)] !== undefined) {
            var subject1 = tlib[subject.substring(0, subject.length - 3)];
          } else {
            var subject1 = subject.substring(0, subject.length - 3);
          }
          var subject2 =
            '(' + GKLKtranslate(subject.substring(subject.length - 2, subject.length)) + ')';
          subject = subject1 + ' ' + subject2;
        }
        if (subject.charAt(subject.length - 4) === '-') {
          if (tlib[subject.substring(0, subject.length - 4)] !== undefined) {
            var subject1 = tlib[subject.substring(0, subject.length - 4)];
          } else {
            var subject1 = subject.substring(0, subject.length - 4);
          }
          var subject2 =
            '(' + GKLKtranslate(subject.substring(subject.length - 3, subject.length - 1));
          var subject3 = subject.substring(subject.length - 1, subject.length);
          subject = subject1 + ' ' + subject2 + ' - ' + subject3 + ')';
        }
      }
      if (tlib[subject] !== undefined) {
        return tlib[subject];
      } else {
        return subject;
      }
    };
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
                  subject = translate(subject);
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
                      title={`${subject}${room ? ` in Raum ${room}` : ''}${
                        isFree ? ' fällt aus' : ''
                      } `}
                      subtitle={
                        !isFree
                          ? teacher ? `wird von ${teacher} vertreten.` : 'wird vertreten.'
                          : undefined
                      }
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
                      backgroundColor: 'rgb(0, 168, 255)',
                      width: 300,
                      height: 45,
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 15,
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
