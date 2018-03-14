import React from 'react';
import { AppRegistry, Dimensions, View, Text } from 'react-native';

import Loading from './components/Loading';
import App from './App';

const { width, height } = Dimensions.get('screen');
const getOrientation = (width, height) => (width > height ? 'landscape' : 'portrait');

const transformGrades = (collection, { id, name }) => {
  collection[name.charAt(0)]
    ? collection[name.charAt(0)].push({ id, name })
    : (collection[name.charAt(0)] = [{ id, name }]);
  return collection;
};

class AppContainer extends React.Component {
  state = {
    orientation: getOrientation(width, height),
    selectedGrade: { level: null, index: null },
    isLoading: true,
    grades: {},
    width,
    height,
  };

  componentWillMount() {
    fetch(
      'http://joomla35.hardtberg-gymnasium.de/neu/components/com_school_mobile/wserv/service.php?user=mustermann&pw&task=getUpdates'
    )
      .then(response => response.json())
      .then(({ klassenjgst }) =>
        this.setState({
          isLoading: false,
          grades: klassenjgst.reduce(transformGrades, {}),
        })
      );

    Dimensions.addEventListener('change', ({ screen }) =>
      this.setState({
        width: screen.width,
        height: screen.height,
        orientation: getOrientation(screen.width, screen.height),
      })
    );
  }

  setActiveGrade = (level, index) => {
    this.setState({ selectedGrade: { level, index } });
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <App screenProps={{ ...this.state, setActiveGrade: this.setActiveGrade }} />
    );
  }
}

AppRegistry.registerComponent('vertretungen', () => AppContainer);
