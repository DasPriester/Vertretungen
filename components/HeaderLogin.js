import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

const cHeader = props => (
  <Header
    centerComponent={{
      text: props.title,
      style: { color: '#fff' },
    }}
  />
);

export default cHeader;
