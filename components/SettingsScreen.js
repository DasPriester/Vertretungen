import React from 'react';

import Header from './Header';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Einstellungen',
  };
  render() {
    return <Header title="Einstellungen" navigation={this.props.navigation} />;
  }
}
