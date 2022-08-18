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
  return products.filter((item) => {
    return item.price >= min && item.price <= max;
  });
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
};
