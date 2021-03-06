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
      screenProps: {
        grades,
        selectedGrade: { level, index },
        substitutes,
        setActiveGrade,
        reloadData,
      },
    } = this.props;
    const { name: grade } = grades[level][index];
    const actualSubstitutes = substitutes[grade];
    tlib = {
      M: 'Mathe',
      D: 'Deutsch',
      E: 'Englisch',
      F: 'Französisch',
      IF: 'Informatik',
      L: 'Latein',
      SW: 'Sozialwissenschaften',
      SP: 'Sport',
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
      VF_E: 'Englisch (Vertiefung)',
      InFö: 'Individuelle Förderung (InFö)',
      S0: 'Spanisch',
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
    TimeLib1 = [
      [],
      ['8:00', '8:45'],
      ['8:45', '9:30'],
      ['9:50', '10:35'],
      ['10:40', '11:25'],
      ['11:40', '12:25'],
      ['12:30', '13:15'],
      ['13:15', '14:15'],
      ['14:15', '15:00'],
      ['15:00', '15:45'],
    ];
    TimeLib2 = [
      [],
      ['8:00', '8:45'],
      ['8:45', '9:30'],
      ['9:50', '10:35'],
      ['10:40', '11:25'],
      ['11:40', '12:25'],
      ['12:30', '13:15'],
      ['13:15', '13:45'],
      ['13:45', '14:30'],
      ['14:30', '15:15'],
    ];
    formatTime = lesson => {
      if (grade !== 'EF' && grade !== 'Q1' && grade !== 'Q2') {
        if (lesson != '10|11|12') {
          return `${TimeLib1[parseInt(lesson.charAt(0))][0]} - ${
            TimeLib1[parseInt(lesson.charAt(lesson.length - 1))][1]
          }`;
        } else {
          return '15:15 - 17:30';
        }
      } else {
        if (lesson != '10|11|12') {
          return `${TimeLib2[parseInt(lesson.charAt(0))][0]} - ${
            TimeLib2[parseInt(lesson.charAt(lesson.length - 1))][1]
          }`;
        } else {
          return '15:15 - 17:30';
        }
      }
    };
    return (
      <Fragment>
        <Header
          title={`Vertretungen - ${grade}`}
          navigation={this.props.navigation}
          reloadData={reloadData}
        />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          {actualSubstitutes ? (
            <List containerStyle={{ marginTop: 0, margin: 0, borderColor: 'rgb(232, 109, 27)' }}>
              <ListItem
                hideChevron
                title="Heute"
                rightTitle="Stunde"
                titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}
                rightTitleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}
                containerStyle={{
                  backgroundColor: 'rgb(232, 109, 27)',
                  borderBottomColor: 'rgb(232, 109, 27)',
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
                        fontSize: 14,
                      }}
                      subtitleStyle={{
                        width: 300,
                        color: isFree ? '#289837' : '#bbb',
                      }}
                      rightTitleStyle={{
                        color: isFree ? '#3e702d' : '#bbb',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}
                      hideChevron
                      key={index}
                      title={`${subject}${room ? ` in Raum ${room}` : ''}${
                        isFree ? ' fällt aus' : ''
                      } `}
                      subtitle={
                        !isFree
                          ? teacher ? `wird von ${teacher} vertreten.` : 'wird vertreten.'
                          : formatTime(lesson)
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
