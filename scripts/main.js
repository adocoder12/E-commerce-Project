import { fetchProducts } from "./fecth.js";
import { displayProducts } from "./displayProducts.js";
import { renderCategories } from "./category.js";
import { setupRealTimeSearch } from "./searchInput.js";

// Import the products from a local file
// import { products } from "./products.js";

async function initializeApp() {
  try {
    // Fetch products from the API
    const products = await fetchProducts(10);
    // Render by categories
    const selectedItems = renderCategories(products);

    if (selectedItems.length > 0) {
      displayProducts(selectedItems);
    } else {
      displayProducts(products);
    }

    // Setup the real-time search functionality
    setupRealTimeSearch(products);
  } catch (error) {
    console.error(error); // Log any errors that occur
  }
}
// Initialize the app after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});
