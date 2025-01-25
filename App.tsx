import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Main from './Main'

const App = () => {
  return (
    <GestureHandlerRootView>
      <Main />
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})