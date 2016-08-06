import React, { Component } from 'react';
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
import { Button } from 'native-base';

import Game from './src/Game';
import Lobby from './src/Lobby';

class Assassins extends Component {
  renderScene(route, navigator) {
    switch (route.title) {
      case 'Game':
        return <Game route={route} navigator={navigator} renderScene={this.renderScene} />;
      default :
        return <Lobby route={route} navigator={navigator} renderScene={this.renderScene} />;
    }
   }
  render() {
    const routes = [
      {title: 'Lobby', index: 0},
      {title: 'Game', index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <Button onPress={() => {
            route.index === 0 ? navigator.push(routes[1]) : navigator.pop();
            }}
          >
            <Text>Go To {route.title}!</Text>
          </Button>
        }
        style={styles.navbar}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.PushFromRight
        }
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              { return (<Text>Cancel</Text>); },
             RightButton: (route, navigator, index, navState) =>
               { return (<Text>Done</Text>); },
             Title: (route, navigator, index, navState) =>
               { return (<Text>{route.title}</Text>); },
           }}
           style={{backgroundColor: 'gray'}}
         />
        }
      />
    );
  }
}

const styles = StyleSheet.create({

  navbar: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#69FACE',
  },
});

AppRegistry.registerComponent('assassins', () => Assassins);
