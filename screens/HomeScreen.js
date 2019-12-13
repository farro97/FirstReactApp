import * as WebBrowser from 'expo-web-browser';
import styled from 'styled-components'
import Project from '../components/Project'
import React from 'react';
import { PanResponder, Animated } from 'react-native'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    pan: new Animated.ValueXY()
  }

  componentWillMount() {
    this._pansResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 }
        }).start();
      }
    })
  }

  render() {
    return (
      <Container>
        <Animated.View style={{
          transform: [
            { translateX: this.state.pan.x },
            { translateY: this.state.pan.y }
          ]
        }}
          {...this._pansResponder.panHandlers}
        >
          <Project 
          title="Price Tag" 
          image={require("../assets/background5.jpg")}
          author="Liu Yi"
          text="Test"
          />

        </Animated.View>
      </Container>
    )
  }


}

export default HomeScreen;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #f0f3f5;
    `;

const Text = styled.Text``;