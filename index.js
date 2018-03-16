import React from 'react';
import { AppRegistry, Dimensions, View, Text } from 'react-native';

import Loading from './components/Loading';
import App from './App';
import { substituteFetcher, gradesFetcher } from './fetchers';
import Storage from './packages/react-native-key-value-store';

const DEFAULT_SELECTED_GRADE = { level: null, index: null };
const { width, height } = Dimensions.get('screen');
const getOrientation = (width, height) => (width > height ? 'landscape' : 'portrait');

class AppContainer extends React.Component {
  state = {
    orientation: getOrientation(width, height),
    selectedGrade: DEFAULT_SELECTED_GRADE,
    isLoading: true,
    grades: {},
    substitutes: {},
    width,
    height,
  };

  loadData = () => {
    this.setState({ isLoading: true });
    Promise.all([
      Storage.get('selectedGrade', DEFAULT_SELECTED_GRADE),
      gradesFetcher(),
      substituteFetcher(),
    ]).then(([selectedGrade, grades, substitutes]) =>
      this.setState({ isLoading: false, grades, substitutes, selectedGrade })
    );
  };

  componentWillMount() {
    this.loadData();

    Dimensions.addEventListener('change', ({ screen }) =>
      this.setState({
        width: screen.width,
        height: screen.height,
        orientation: getOrientation(screen.width, screen.height),
      })
    );
  }

  setActiveGrade = ({ level, index } = DEFAULT_SELECTED_GRADE) => {
    Storage.set('selectedGrade', { level, index });
    this.setState({ selectedGrade: { level, index } });
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <App
        screenProps={{
          ...this.state,
          setActiveGrade: this.setActiveGrade,
          reloadData: this.loadData,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('vertretungen', () => AppContainer);
