/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Socket } from './phoenix.js';

import {
  AppRegistry,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import users from './src/data/users';
import player from './src/data/player';

import KillArea from './src/KillArea';
import InfoArea from './src/InfoArea';
import ListArea from './src/ListArea';

class Assassins extends Component {
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
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <TouchableHighlight onPress={() => {
                if (route.index === 0) {
                  navigator.push(routes[1]);
                } else {
                  navigator.pop();
                }
              }}>
              <Text>Hello {route.title}!</Text>
            </TouchableHighlight>
            <InfoArea alias={player.alias} points={player.points} />
            <ListArea players={users} player={player} />
            <KillArea name={player.name} />
          </View>
        }
        style={{padding: 5}}
      />
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

AppRegistry.registerComponent('assassins', () => Assassins);
