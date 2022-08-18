products = [
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
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
