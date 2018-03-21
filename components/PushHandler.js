import React, { Component } from 'react';
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PushControler extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('Notification:', notification);

        Platform.OS === 'ios' && notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
  }
  render() {
    return null;
  }
}
