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

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
};
