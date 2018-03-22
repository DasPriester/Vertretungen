import React, { Fragment, Component } from 'react';
import { View, Text, Platform, StyleSheet, Switch } from 'react-native';
import { Button } from 'react-native-elements';
import PushNotification from 'react-native-push-notification';

import Header from './Header';
import PushController from './PushHandler';

export default class SettingsScreen extends React.Component {
  state = { switch: true };
  static navigationOptions = {
    drawerLabel: 'Einstellungen',
  };
  sendMessage = text => {
    if (this.state.switch) {
      PushNotification.localNotification({
        message: text,
      });
    }
  };
  ac_switch = () => {
    this.setState({ switch: !this.state.switch });
  };
  render() {
    const { screenProps: { reloadData } } = this.props;
    return (
      <Fragment>
        <PushController />
        <Header title="Einstellungen" navigation={this.props.navigation} />
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
              <Switch onValueChange={this.ac_switch} value={this.state.switch} />
            </View>
          </View>
        </View>
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
              height: 85,
              width: 340,
              borderRadius: 15,
              backgroundColor: 'rgb(180, 180, 180)',
            }}
          >
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
              onPress={() => reloadData()}
            />
          </View>
        </View>
      </Fragment>
    );
  }
}
