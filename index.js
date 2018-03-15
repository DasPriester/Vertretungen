import React from 'react';
import { AppRegistry, Dimensions, View, Text } from 'react-native';

import Loading from './components/Loading';
import App from './App';
import { substituteFetcher, gradesFetcher } from './fetchers';

const { width, height } = Dimensions.get('screen');
const getOrientation = (width, height) => (width > height ? 'landscape' : 'portrait');

class AppContainer extends React.Component {
  state = {
    orientation: getOrientation(width, height),
    selectedGrade: { level: null, index: null },
    isLoading: true,
    grades: {},
    substitutes: {},
    width,
    height,
  };

  componentWillMount() {
    Promise.all([gradesFetcher(), substituteFetcher()]).then(([grades, substitutes]) =>
      this.setState({ isLoading: false, grades, substitutes })
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
