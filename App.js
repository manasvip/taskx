import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
      console.log(' bootsplash is called');
    }, 3000);
  }, []);
  return <HomeScreen />;
};

export default App;
