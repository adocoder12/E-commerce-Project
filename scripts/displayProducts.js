import { displayProductModal } from "./modal.js";

export const displayProducts = (products) => {
  const productsContainer = document.getElementById("products");

  // Clear the container before adding new products
  productsContainer.innerHTML = "";

  // Get the product template
  const productTemplate = document.getElementById("product-template");

  // Check if the template exists
  if (!productTemplate) {
    console.error(
      "Error: The template with id 'product-template' was not found in the DOM."
    );
    return;
  }

  // Loop through each product and display it
  products.forEach((product) => {
    const productElement = productTemplate.content.cloneNode(true);

    // Get elements from the cloned template
    const cardImage = productElement.querySelector(".card-image");
    const categoryElement = productElement.querySelector(".category");
    const titleElement = productElement.querySelector(".product-title");
    const priceElement = productElement.querySelector(".price");
    const addToCartButton = productElement.querySelector("#addToCart");

    cardImage.src = product.imageURL;
    categoryElement.textContent = product.category || "Unknown Category";
    titleElement.textContent = product.title || "No title available";
    priceElement.textContent = `${product.price} €`;

    // Display the product details in a modal
    cardImage.addEventListener("click", function () {
      displayProductModal(product);
    });

    // Append the cloned product element to the products container
    productsContainer.appendChild(productElement);
  });
};
