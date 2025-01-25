import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import FirstProfile from './FirstProfile';
import SecondProfile from './SecondProfile';

const Stack = createStackNavigator();

const ProfileTabLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='first-profile' component={FirstProfile} />
      <Stack.Screen name='second-profile' component={SecondProfile} />
    </Stack.Navigator>
  )
}

export default ProfileTabLayout

const styles = StyleSheet.create({})