import { displayProducts } from "./displayProducts.js";

// Render the categories inside the dropdown list
export const renderCategories = (products) => {
  let selectedItems = [];
  const categoriesContainer = document.getElementById("categories");
  const trigger = document.getElementById("selectedCategory");
  const dropdownInput = document.getElementById("state-dropdown");

  // Clear existing categories
  categoriesContainer.innerHTML = "";

  // Extract unique categories from the product list
  const categories = [
    "All Products",
    ...new Set(products.map((product) => product.category)),
  ];

  categories.forEach((category) => {
    // Create a category article
    const categoryArticle = document.createElement("article");
    categoryArticle.className = "category";
    categoryArticle.textContent = category;

    // Create a list item for each category
    const categoryItem = document.createElement("li");
    categoryItem.className = "listitem article category";
    categoryItem.setAttribute("role", "listitem");

    // Append the category article to the list item
    categoryItem.appendChild(categoryArticle);

    // Append category item to the container
    categoriesContainer.appendChild(categoryItem);
  });

  // Handle click events for the dropdown
  categoriesContainer.addEventListener("click", (event) => {
    if (event.target.matches(".category")) {
      // Get selected category
      const selectedCategory = event.target.textContent;

      if (selectedCategory === "All Products") {
        selectedItems = products;
      } else {
        selectedItems = handleSelectCategory(selectedCategory, products);
      }

      trigger.textContent = selectedCategory.toUpperCase();
      dropdownInput.checked = false;
      displayProducts(selectedItems);
    }
  });

  return selectedItems;
};

// Handle category selection and filter products
const handleSelectCategory = (selectedCategory, products) => {
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return filteredProducts;
};
