const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello Pakistan"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => `server running at port ${url}`);
