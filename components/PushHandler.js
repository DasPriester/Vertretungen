import React, { Component } from 'react';
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('Notification:', notification);
      },
    });
  }
  render() {
    return null;
  }
}
