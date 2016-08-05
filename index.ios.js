/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import KillArea from './KillArea';

class assassins extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KillArea name="Jeff Lebowski" />
        <Image style={styles.crosshair} source={require('./crosshair.svg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('assassins', () => assassins);
