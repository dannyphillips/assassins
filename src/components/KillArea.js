import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class KillArea extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.label}>REAL IDENTITY:</Text>
        <Text style={styles.label}>{this.props.name.toUpperCase()}</Text>
        <Text style={styles.label}>ALIAS: </Text>
        <TextInput style={styles.textEdit} value="Placeholder" />
        <Image style={styles.img} source={require('../images/crosshairs.png')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#444',
    flex: 1,
    maxHeight: 100,
  },
  img: {
    height: 70,
    left: 5,
    opacity: 0.3,
    position: 'absolute',
    top: 15,
    width: 70,
  },
  textEdit: {
    fontSize: 11,
    height: 20,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    width: 200,
  },
  label: {
    color: 'white',
    fontSize: 11,
    marginBottom: 10,
    marginLeft: 80,
    marginTop: 10,
  },
});
