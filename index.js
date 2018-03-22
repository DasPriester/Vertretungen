import React from 'react';
import { AppRegistry, Dimensions, View, Text, NetInfo, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

import Loading from './components/Loading';
import App from './App';
import { substituteFetcher, gradesFetcher } from './fetchers';
import Storage from './packages/react-native-key-value-store';
import PushController from './components/PushHandler';

const DEFAULT_SELECTED_GRADE = { level: null, index: null };
const { width, height } = Dimensions.get('screen');
const getOrientation = (width, height) => (width > height ? 'landscape' : 'portrait');

var SavedSubstitutes = [];

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

  sendMessage = text => {
    if (true) {
      PushNotification.localNotification({
        message: text,
      });
    }
  };

  loadData = () => {
    this.setState({ isLoading: true });
    if (NetInfo.isConnected) {
      Promise.all([
        Storage.get('selectedGrade', DEFAULT_SELECTED_GRADE),
        gradesFetcher(),
        substituteFetcher(),
      ]).then(([selectedGrade, grades, substitutes]) =>
        this.setState({ isLoading: false, grades, substitutes, selectedGrade })
      );
    } else {
      Alert.alert(
        'Info:',
        'Keine Internet-Verbindung...',
        [{ text: 'Erneut versuchen', onPress: () => this.loadData() }],
        { cancelable: false }
      );
    }
    if (this.state.substitutes[this.state.grade] !== SavedSubstitutes[this.state.grade]) {
      SavedSubstitutes = this.state.substitutes;
      sendMessage('Neue Vertretungen für dich!');
    }
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
