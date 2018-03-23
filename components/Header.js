import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Icon, Header } from 'react-native-elements';

const MenuButton = props => (
  <TouchableHighlight
    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
    onPress={() => props.navigation.navigate('DrawerOpen')}
    underlayColor="rgb(0, 168, 255)"
  >
    <View>
      <Icon name={props.icon} color={props.color} />
    </View>
  </TouchableHighlight>
);

export default ({ navigation, title, hideButtons }) =>
  hideButtons ? (
    <Header
      outerContainerStyles={{
        backgroundColor: 'rgb(0, 168, 255)',
        borderBottomColor: 'rgb(0, 168, 255)',
      }}
      centerComponent={{
        text: title,
        style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
      }}
    />
  ) : (
    <Header
      outerContainerStyles={{
        backgroundColor: 'rgb(0, 168, 255)',
        borderBottomColor: 'rgb(0, 168, 255)',
      }}
      leftComponent={<MenuButton navigation={navigation} icon="menu" color="white" />}
      centerComponent={{
        text: title,
        style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
      }}
    />
  );
