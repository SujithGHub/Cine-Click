import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstHome from './FirstHome';
import SecondHome from './SecondHome';

const Stack = createStackNavigator();

const HomeTabLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='first-home' component={FirstHome} />
      <Stack.Screen name='second-home' component={SecondHome} />
    </Stack.Navigator>
  )
}

export default HomeTabLayout

const styles = StyleSheet.create({})