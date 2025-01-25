import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import SingUp from './screens/SingUp';
import TabLayout from './tabs/TabLayout';

export type RootStackParamList = {
  Login: { name: string };
  SignUp: undefined;
  Tab: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer direction='ltr'>
      <Stack.Navigator screenOptions={{ animation: 'fade_from_right' }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SingUp} />
        <Stack.Screen name='Tab' component={TabLayout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})