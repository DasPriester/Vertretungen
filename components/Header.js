import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Icon, Header } from 'react-native-elements';

const MenuButton = props => (
  <TouchableHighlight onPress={() => props.navigation.navigate('DrawerOpen')}>
    <View>
      <Icon name={props.icon} color={props.color} />
    </View>
  </TouchableHighlight>
);

export default ({ navigation, title, hideButtons }) =>
  hideButtons ? (
    <Header
      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
      centerComponent={{
        text: title,
        style: { color: '#fff' },
      }}
    />
  ) : (
    <Header
      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
      leftComponent={<MenuButton navigation={navigation} icon="menu" color="white" />}
      centerComponent={{
        text: title,
        style: { color: '#fff' },
      }}
    />
  );
