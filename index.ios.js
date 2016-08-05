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


import KillArea from './src/KillArea';
import InfoArea from './src/InfoArea';
import ListArea from './src/ListArea';

class assassins extends Component {
  render() {
    const users = [
      {
        name: "Danny",
        alias: "Lucky Llama",
        points: 100,
        target: "James",
        alive: 1,
      },
      {
        name: "James",
        alias: "Majestic Mountain",
        points: 200,
        target: "Noah",
        alive: 1,
      },
      {
        name: "Marcus",
        alias: "Dirty Dave",
        points: 300,
        target: null,
        alive: 0,
      },
      {
        name: "Noah",
        alias: "Golden Goose",
        points: 400,
        target: "Danny",
        alive: 1,
      },
    ];

    return (
      <View style={styles.container}>
        <InfoArea alias="Majestic Island" points="999" />
        <ListArea users={users} />
        <KillArea name="Jeff Lebowski" />
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
