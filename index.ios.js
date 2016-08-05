/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

window.navigator.userAgent = 'react-native';

import React, { Component } from 'react';
// import io from 'socket.io-client/socket.io';
// import socket from 'phoenix-socket';
import { Socket } from './phoenix.js';

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
  componentDidMount() {
    const url = "https://assassins-staging.herokuapp.com/api/socket/websocket";
    const socket = new Socket(url);
    socket.connect();

    let channel = socket.channel("games:6")
    console.warn(channel)

    // socket.on("update", (msg) => {
    //   console.warn(msg);
    // });

    // channel.push("new_msg", {body: e.target.val}, 10000)

    // channel.on("ping", msg => console.log("Got message", msg) )
  }

  render() {
    const players = [
      {
        name: "Danny",
        alias: "Lucky Llama",
        points: 100,
        target: "James",
        alive: true,
      },
      {
        name: "James",
        alias: "Majestic Mountain",
        points: 200,
        target: "Noah",
        alive: true,
      },
      {
        name: "Marcus",
        alias: "Dirty Dave",
        points: 300,
        target: null,
        alive: false,
      },
      {
        name: "Noah",
        alias: "Golden Goose",
        points: 400,
        target: "Danny",
        alive: true,
      },
    ];

    const player = {
        name: "Noah",
        alias: "Golden Goose",
        points: 400,
        target: "Danny",
        alive: 1,
        discovered: ["James", "Marcus"]
      };

    return (
      <View style={styles.container}>
        <InfoArea alias={player.alias} points={player.points} />
        <ListArea players={players} player={player} />
        <KillArea name={player.name} />
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
