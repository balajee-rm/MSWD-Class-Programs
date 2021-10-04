import React from 'react';
import { FlatList, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  console.log ("repositeries = ");
  console.log (repositories);

  const repositoryNodes = [];

  if (repositories) {
  for(const [key, val] of Object.entries(repositories)) {
    repositoryNodes.push(val);
  }

  console.log("repository nodes = ");
  console.log(repositoryNodes);
  }

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.content}, {item.date}</Text>
          )}
      // Other props
    />
  );
};

export default RepositoryList;