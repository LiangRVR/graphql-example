const path = require("node:path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { query } = require("express");

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: typeArray,
  resolvers: {
    Query: {
      products: async (parent) => {
        console.log("Getting products ...");
        const product =  await Promise.resolve(parent.products)
        return product;
      },
      orders: (parent) => {
        console.log("Getting orders ...");
        return parent.orders;
      },
    },
  },
});

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
