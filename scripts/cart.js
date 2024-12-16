const cart = [];

export const updateCartCount = () => {
  const cartCountBtn = document.querySelector("#cart-icon");

  if (!cartCountBtn) {
    console.error("Cart count button not found.");
    return;
  }

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  cartCountBtn.setAttribute("data-count", totalItems);
};

export const addToCart = (product) => {
  // Find if the product is already in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If product exists, increase its quantity by 1
    existingProduct.quantity += 1;
  } else {
    // If product is new, add it to the cart with a quantity of 1
    const newProduct = { ...product, quantity: 1 };
    cart.push(newProduct);
  }

  updateCartCount();
  console.log("Product added to cart:", cart);
};
