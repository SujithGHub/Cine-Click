import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import FirstMovies from './FirstMovies';
import SecondMovies from './SecondMovies';

const Stack = createStackNavigator();

const MoviesTabLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='first-movie' component={FirstMovies} />
      <Stack.Screen name='second-movie' component={SecondMovies} />
    </Stack.Navigator>
  )
}

export default MoviesTabLayout

const styles = StyleSheet.create({})