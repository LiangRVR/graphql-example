const path = require("node:path");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const startApolloServer = async () => {
  const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resolversArray,
  });

  const app = express();

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  app.listen(3000, () => {
    console.log("Running GraphQL server...");
  });
};

startApolloServer();
