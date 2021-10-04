import { ApolloClient, InMemoryCache, createHttpLink, HttpLink } from '@apollo/client';

/*const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: 'http://127.0.0.1:8081/graphql',
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};*/

const createApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8081/graphql',
  })
})

export default createApolloClient;