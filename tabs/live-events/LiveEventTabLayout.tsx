import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import FirstLiveEvent from './FirstLiveEvent';
import SecondLiveEvent from './SecondLiveEvent';

const Stack = createStackNavigator();

const LiveEventTabLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='first-live-event' component={FirstLiveEvent} />
      <Stack.Screen name='second-live-event' component={SecondLiveEvent} />
    </Stack.Navigator>
  )
}

export default LiveEventTabLayout

const styles = StyleSheet.create({})