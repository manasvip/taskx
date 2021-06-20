import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default function SignupScreen({navigation}) {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button
        title=" Want to go sign in screen?"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
