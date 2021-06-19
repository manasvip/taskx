import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import RNBootSplash from "react-native-bootsplash";

import HomeScreen from './screens/HomeScreen';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <HomeScreen />
  )
} 

export default App;