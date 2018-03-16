import React from 'react';
import { ActivityIndicator, View, Text, ImageBackground, StyleSheet } from 'react-native';

export default () => (
  <ImageBackground
    style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' }}
    source={require('../images/splash.png')}
  >
    <ActivityIndicator style={{ marginTop: 200 }} animating size="large" color="white" />
  </ImageBackground>
);
