import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';

import {SignIn, SignUp} from './screens';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
      console.log(' bootsplash is called');
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignIn} />
        <Stack.Screen name="Login" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
