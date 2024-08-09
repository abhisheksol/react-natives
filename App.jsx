import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import feedscreens from './src/screens/Home';
import Articalscreen from './src/screens/Contact';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={feedscreens} />
        <Drawer.Screen name="Contact" component={Articalscreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

}

export default App

const styles = StyleSheet.create({}) 