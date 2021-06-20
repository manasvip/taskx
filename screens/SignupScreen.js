import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign up screen</Text>
      <Button 
        title='Go to Sign in' 
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}
