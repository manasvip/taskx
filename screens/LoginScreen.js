import React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
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

      <View style={{ flex: 3 }}>
        <Text style={{ marginBottom: 20 }}>Login to your account</Text>

        <View>
          <TextInput style={styles.input} placeholder="Email" />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button style={styles.button} title="Login" />
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ marginRight: 10 }}>Don't have an account?</Text>
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={{ color: 'green', fontWeight: '500' }}>
            Sign up
          </Text>
        </View>
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
