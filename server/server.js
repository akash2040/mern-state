const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
// set up apollo
const { ApolloServer } = require('apollo-server-express');
// set up queries, mutations, and resolvers
const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

// create instance of an apollo server with graphql
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

// call the function to actually start the apollo server
// startApolloServer(typeDefs, resolvers);