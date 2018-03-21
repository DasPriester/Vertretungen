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
        <View style={{ backgroundColor: 'grey' }}>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Push Nachrichtenhten</Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Switch onValueChange={this.ac_switch} value={this.state.switch} />
            </View>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 50 }}
        >
          <Button
            buttonStyle={{
              backgroundColor: '#456FC6',
              width: 300,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5,
              marginBottom: 20,
            }}
            title="Message Test"
            onPress={() => this.sendMessage('test')}
          />
          <Button
            buttonStyle={{
              backgroundColor: '#456FC6',
              width: 300,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5,
            }}
            title="Daten aktualisieren"
            onPress={() => reloadData()}
          />
        </View>
      </Fragment>
    );
  }
}
