import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import Parse from 'parse/react-native';

import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Tweets from './components/tweets/tweets';

const ROUTES = {
  signin: SignIn,
  signup: SignUp,
  tweets: Tweets
};

export default class Main extends Component {
  componentWillMount() {
    Parse.initialize('<Your_Application_ID>', '<Your_Javascript_Key');
  }

  renderScene(route, navigator) {
    const component = ROUTES[route.name];
    return <component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
