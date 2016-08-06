import React, { Component } from 'react';

import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default class InfoArea extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.renderScene({title: 'Game', index: 1}, this.props.navigator)}
          style={styles.navbar}
        >
          <Text>Hello {this.props.route.title}!</Text>
        </TouchableHighlight>
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
