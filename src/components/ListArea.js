import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class ListArea extends React.Component {
  render() {
    const playerElements = this.props.players.map((playerObj, index) => {
      const alias = this.props.player.discovered.indexOf(playerObj.name) > -1 ? playerObj.alias : "???"

      return <View key={`player${index}`}>
        <Text style={styles.label}>{playerObj.points}</Text>
        <Text style={styles.label}>{playerObj.name}</Text>
        <Text style={styles.label}>{alias}</Text>
      </View>
    });

    return (
      <View style={styles.main}>
        <Text style={styles.title}>User list</Text>
        {playerElements}
        <Image style={styles.img} source={require('../images/trophy.png')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#444',
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
  title: {
    color: 'white',
    fontSize: 14,
    margin: 5,
  },
  label: {
    color: 'white',
    fontSize: 11,
    marginBottom: 10,
    marginLeft: 80,
    marginTop: 10,
  },
});
