import React, { Component } from 'react';

import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import KillArea from './components/KillArea';
import ListArea from './components/ListArea';

import users from './data/users';
import player from './data/player';

export default class InfoArea extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.renderScene({title: 'Lobby', index: 0}, this.props.navigator)}
          style={styles.navbar}
        >
          <Text>Hello {this.props.route.title}!</Text>
        </TouchableHighlight>
        <InfoArea alias={player.alias} points={player.points} />
        <ListArea players={users} player={player} />
        <KillArea name={player.name} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
