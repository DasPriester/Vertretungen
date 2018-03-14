import React from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import App from './App';

const { width, height } = Dimensions.get('screen');
const getOrientation = (width, height) => (width > height ? 'landscape' : 'portrait');

class AppContainer extends React.Component {
  state = {
    orientation: getOrientation(width, height),
    width,
    height,
  };

  componentWillMount() {
    Dimensions.addEventListener('change', ({ screen }) =>
      this.setState({
        width: screen.width,
        height: screen.height,
        orientation: getOrientation(screen.width, screen.height),
      })
    );
  }

  render() {
    return <App screenProps={this.state} />;
  }
}

AppRegistry.registerComponent('vertretungen', () => AppContainer);
