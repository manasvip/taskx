import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/logo-blue.png')} />
      </View>

      <View style={{ flex: 4 }}>
        <Text style={{ marginBottom: 20 }}>Login to your account</Text>

        <View>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <Button style={styles.button} title="Sign up" />
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <Text>
          Already have an account?
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{ color: 'green', fontWeight: '500' }}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
  },

  input: {
    height: 48,
    paddingHorizontal: 10,
    marginBottom: 10,
    //borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },

  button: {
    color: 'red',
  },
});
