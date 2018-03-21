import React, { Fragment } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import SettingsScreen from './components/SettingsScreen';
import PushControler from './components/PushHandler';

const CustomDrawerContentComponent = ({ items, ...props }) => {
  const filteredItems = items.filter(({ key }) => key !== 'LogOut');
  const logoutItem = items.filter(({ key }) => key === 'LogOut');

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{ flex: 1 }}>
          <DrawerItems items={filteredItems} {...props} />
        </View>
        <DrawerItems
          {...props}
          items={logoutItem}
          labelStyle={{
            color: 'red',
          }}
          onItemPress={route => props.screenProps.setActiveGrade()}
        />
      </SafeAreaView>
      <PushControler />
    </ScrollView>
  );
};

const Navigator = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    LogOut: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
  }
);

export default props =>
  props.screenProps.selectedGrade.level ? <Navigator {...props} /> : <LoginScreen {...props} />;
