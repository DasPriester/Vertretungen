import React, { Fragment } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Header from './Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    const { screenProps: { grades, selectedGrade: { level, index }, substitutes } } = this.props;
    const { name: grade } = grades[level][index];
    const actualSubstitutes = substitutes[grade];
    return (
      <Fragment>
        <Header title={`Vertretungen - ${grade}`} navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          <List containerStyle={{ marginBottom: 20 }}>
            {actualSubstitutes.map(({ teacher, lesson, isFree, subject }, index) => (
              <ListItem
                containerStyle={{
                  backgroundColor: isFree ? 'rgb(27, 159, 44)' : undefined,
                }}
                titleStyle={{
                  color: !isFree ? 'orange' : 'black',
                }}
                rightTitleStyle={{
                  color: !isFree ? 'orange' : 'black',
                }}
                subtitleStyle={{
                  color: !isFree ? 'orange' : 'black',
                }}
                hideChevron={true}
                key={index}
                title={subject}
                subtitle={teacher}
                rightTitle={lesson}
              />
            ))}
          </List>
        </View>
      </Fragment>
    );
  }
}
