import React from 'react';
import {View, Text, Button} from 'react-native';

export default function LoginScreen(props) {
  const {navigation} = props;

  return (
    <>
      <Text> Login Screen</Text>
      <Button
        title="Goto SignUp screen"
        onPress={() => navigation.navigate('SignUp')}
      />
    </>
  );
}
