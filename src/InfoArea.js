import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class InfoArea extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.label}>MY ALIAS:</Text>
        <Text style={styles.label}>{this.props.alias}</Text>
        <Text style={styles.label}>POINTS:</Text>
        <Text style={styles.label}>{this.props.points}</Text>
        <Image style={styles.img} source={require('./images/user.png')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  img: {
    height: 70,
    left: 5,
    opacity: 0.3,
    position: 'absolute',
    top: 15,
    width: 70,
  },
  main: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#444',
    flex: 1,
    maxHeight: 100,
  },
  label: {
    color: 'white',
    fontSize: 11,
    marginBottom: 10,
    marginLeft: 80,
    marginTop: 10,
  },
});
