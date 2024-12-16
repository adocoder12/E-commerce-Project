import { displayProducts } from "./products.js";

export function setupRealTimeSearch(products) {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredProducts = filterProducts(query, products);
    displayProducts(filteredProducts);
  });
}

function filterProducts(query, products) {
  if (!query) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
}
