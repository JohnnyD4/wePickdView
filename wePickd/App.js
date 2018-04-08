import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';

import stores from './src/mobx/index';
import Home from './src/components/home';
import List from './src/components/list';
import MoviePage from './src/components/moviePage';
import MovieStats from './src/components/movieStats';
import MovieInfo from './src/components/movieInfo';

export default class App extends React.Component {
  render() {
    const RootStack = StackNavigator({
      Home: {
        screen: Home,
      },
      List: {
        screen: List,
      },
      Movie: {
        screen: MovieStats,
      },
      MovieDetails: {
        screen: MovieInfo,
      },
      MoviePage: {
        screen:MoviePage,
      },
    },
    {
      initialRouteName: 'Home',
    });
    return (
      <Provider {...stores}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
