const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const Schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
      id: ID!
      description: String!
      reviews: [Review]
      price: Float!
    }

    type Review {
      rating: Int!
      comment: String
    }

    type Order {
      date: String!
      subtotal: Float!
      items: [OrderItem]
    }

    type OrderItem {
      product: Product!
      quantity: Int!
    }
`);

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
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
