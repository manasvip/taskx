import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {

  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}> 
        <Image source={ require('../assets/logo-blue.png')} />
      </View>
      <View style={{ flex: 3, backgroundColor: "darkorange" }} />
      <View style={{ flex: 2}} >
        <Text>Icons with text</Text>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

