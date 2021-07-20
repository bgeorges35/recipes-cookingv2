import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { gql } from "@apollo/client";

const typeDefs = gql`
  type Categories {
    browse-categories: [Test1]
    shopping-categories: [Test2]
  }
  extend type Query {
    characters: [Categories]
  }
`;

const restLink = new RestLink({
  uri: "https://yummly2.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
    "x-rapidapi-host": process.env.API_HOST,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
  typeDefs,
});

export default client;
