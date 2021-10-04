import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View, AppRegistry, FlatList } from 'react-native';
//import Text from './Text';
import { Route, Switch, Redirect, Link } from 'react-router-native';
import FlexDesign from './FlexDesign';
import { useQuery } from '@apollo/client';
import { ALL_PERSONS } from '../graphql/queries';

const Main = () => {
  const { data, error, loading } = useQuery(ALL_PERSONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <FlatList
      data={data.allPersons}
      keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}, {item.phone}</Text>
          )}
      // Other props
    />
  )
};

export default Main