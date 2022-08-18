products = [
  {
    id: "blueShoe",
    description: "Blue Shoe",
    price: 25.3,
    reviews: [],
  },
  {
    id: "redJeans",
    description: "Red Jeans",
    price: 42.1,
    reviews: [],
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

const addProductReview = (id, rating, comment) => {
  const newReview = {
    rating,
    comment,
  };

  for (product of products) {
    if (product.id === id) {
      product.reviews.push(newReview);
      return newReview;
    }
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addProductReview,
};
