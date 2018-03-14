import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Icon, Header } from 'react-native-elements';

const cHeader = props => (
  <Header
    outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
    leftComponent={<MenuButton navigation={props.navigation} icon="menu" color="white" />}
    centerComponent={{
      text: props.title,
      style: { color: '#fff' },
    }}
    rightComponent={<SettingsButton icon="settings" color="white" />}
  />
);
const SettingsButton = props => (
  <View>
    <Icon name={props.icon} color={props.color} />
  </View>
);

const MenuButton = props => (
  <TouchableHighlight onPress={() => props.navigation.navigate('DrawerOpen')}>
    <View>
      <Icon name={props.icon} color={props.color} />
    </View>
  </TouchableHighlight>
);

export default cHeader;
