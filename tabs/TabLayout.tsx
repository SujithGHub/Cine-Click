import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeTabLayout from './home/HomeTabLayout';
import LiveEventTabLayout from './live-events/LiveEventTabLayout';
import MoviesTabLayout from './movies/MoviesTabLayout';
import ProfileTabLayout from './profile/ProfileTabLayout';

type TabNavigatorParamList = {
  Home: undefined;
  Movies: undefined;
  LiveEvents: undefined;
  Profile: undefined;
}

const Tabs = createBottomTabNavigator<TabNavigatorParamList>();

const TabLayout = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={HomeTabLayout} />
      <Tabs.Screen name='Movies' component={MoviesTabLayout} />
      <Tabs.Screen name='LiveEvents' component={LiveEventTabLayout} />
      <Tabs.Screen name='Profile' component={ProfileTabLayout} />
    </Tabs.Navigator>
  )
}

export default TabLayout

const styles = StyleSheet.create({})