import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import Header from './Header';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Einstellungen',
  };
  render() {
    const { screenProps: { reloadData } } = this.props;
    return (
      <Fragment>
        <Header title="Einstellungen" navigation={this.props.navigation} />
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
            }}
            title="Daten aktualisieren"
            onPress={() => reloadData()}
          />
        </View>
      </Fragment>
    );
  }
}
