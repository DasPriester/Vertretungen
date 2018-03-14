import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

export default () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator animating size="large" />
  </View>
);
