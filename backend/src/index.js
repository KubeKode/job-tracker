const express = require('express');
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const httpServer = createServer(app);
const PORT = 4000;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Wrap the Express server with the WebSocket server
SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: httpServer,
    path: '/subscriptions',
  }
);


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, 
}));

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
