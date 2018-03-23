import React, { Fragment, Component } from 'react';
import { View, Text, Platform, StyleSheet, Switch } from 'react-native';
import { Button } from 'react-native-elements';
import PushNotification from 'react-native-push-notification';

import Header from './Header';
import PushController from './PushHandler';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Einstellungen',
  };

  sendMessage = text => {
    PushNotification.localNotification({
      message: text,
    });
  };

  render() {
    const { screenProps: { reloadData } } = this.props;
    return (
      <Fragment>
        <PushController />
        <Header title="Einstellungen" navigation={this.props.navigation} reloadData={reloadData} />
        <View style={{ backgroundColor: 'rgb(232, 109, 27)' }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              margin: 20,
            }}
          >
            <Text style={{ fontSize: 20, color: 'white' }}>Push-Nachrichten</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Switch onValueChange={this.switch} value={state} />
            </View>
          </View>
        </View>{' '}
        */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 20,
              width: 340,
              borderRadius: 15,
              backgroundColor: 'rgb(180, 180, 180)',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                width: 300,
                marginBottom: 20,
                borderRadius: 15,
                backgroundColor: 'white',
              }}
            >
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 7 }}>
                Credits
              </Text>
              <Text
                style={{
                  color: 'rgb(180, 180, 180)',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                }}
              >
                -HBG Vertretungsplan- Programming by Philipp Brumm & Michel Rothboeck
              </Text>
            </View>
            <Button
              buttonStyle={{
                backgroundColor: 'rgb(0, 168, 255)',
                width: 300,
                height: 45,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 15,
              }}
              title="Daten aktualisieren"
              textStyle={{ fontSize: 20 }}
              onPress={() => reloadData()}
            />
          </View>
        </View>
      </Fragment>
    );
  }
}
