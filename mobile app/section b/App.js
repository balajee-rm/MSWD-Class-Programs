import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Pressable, Alert, View } from 'react-native';
import Main from './src/components/Main';
import FlexDesign from './src/components/FlexDesign';
import { NativeRouter } from 'react-router-native';
import BodyMass from './src/components/BodyMass'

const PressableText = props => {
  return (
    <Pressable
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text>You can press me</Text>
    </Pressable>
  );
};

export default function App() {
  console.log("The app function is called");
  return (
    <View style={styles.container}>
      <Text>Balajee R M - Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <PressableText />
      <NativeRouter>
        <Main />
      </NativeRouter>
      <BodyMass />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
