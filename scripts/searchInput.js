import { displayProducts } from "./displayProducts.js";

export function setupRealTimeSearch(products) {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredProducts = filterProducts(query, products);

    if (filteredProducts.length === 0) {
      const productsContainer = document.querySelector(".products-wrapper");
      productsContainer.innerHTML =
        '<h2 style="display: flex;">No product found</h2>';
    } else {
      displayProducts(filteredProducts);
    }
  });
}

function filterProducts(query, products) {
  if (!query) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
}
