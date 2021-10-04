import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Pressable, Alert, View } from 'react-native';
import Main from './src/components/Main';
import FlexDesign from './src/components/FlexDesign';
import { NativeRouter } from 'react-router-native';
import BodyMass from './src/components/BodyMass'
import RepositoryList from './src/components/RepositoryList'
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import DoShopping from './src/utils/DoShopping';

const apolloClient = createApolloClient;

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
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <BodyMass />
      <RepositoryList />
      <DoShopping />
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
