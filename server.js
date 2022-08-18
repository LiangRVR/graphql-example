const path = require("node:path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: typeArray,
});

const root = {
  products: [
    {
      id: "blueShoe",
      description: "Blue Shoe",
      price: 25.3,
    },
    {
      id: "redJeans",
      description: "Red Jeans",
      price: 42.1,
    },
  ],
  orders: [
    {
      date: "2005-12-20",
      subtotal: 67.4,
      items: [
        {
          product: {
            id: "blueShoe",
            description: "Old Blue Shoe",
            price: 26.3,
          },
          quantity: 3,
        },
      ],
    },
  ],
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
