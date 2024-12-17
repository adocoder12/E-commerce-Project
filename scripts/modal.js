import { addToCart } from "./cart.js";

export const displayProductModal = (product) => {
  // Get the modal template
  const modalTemplate = document.getElementById("productModalTemplate");
  const productsContainer = document.getElementById("products");

  // Check if the template exists
  if (!modalTemplate) {
    console.error(
      "Error: The template with id 'productModalTemplate' was not found."
    );
    return;
  }

  // Clone the modal template content
  const modalElement = modalTemplate.content.cloneNode(true);

  // Inject product data into the modal
  const productImage = modalElement.querySelector(".modal-product-image");
  const productTitle = modalElement.querySelector(".modal-product-title");
  const productCategory = modalElement.querySelector(".modal-product-category");
  const productPrice = modalElement.querySelector(".modal-product-price");
  const productDescription = modalElement.querySelector(
    ".modal-product-description"
  );

  productImage.src = product.imageURL;
  productImage.alt = product.title;
  productTitle.textContent = product.title || "No title available";
  productCategory.textContent = product.category || "Unknown Category";
  productPrice.textContent = product.price || "0.00";
  productDescription.textContent =
    product.description || "No description available";

  // Add-to-cart button functionality (ensure the modal has an Add to Cart button)
  const addToCartButton = modalElement.querySelector("#addToCart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      // Create the product object from modal's current data
      const productToAdd = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.imageURL,
      };

      // Add the product to the cart
      addToCart(productToAdd);
      addToCartButton.textContent = "Added to Cart!";
      addToCartButton.style.backgroundColor = "green";

      // // close the modal after 3 seconds
      // setInterval(() => {
      //   modal.remove();
      // }, 3000);
    });
  }

  // Append the modal to the body (or a container)
  productsContainer.appendChild(modalElement);

  // Display the modal
  const modal = document.body.querySelector(".modal");
  modal.classList.add("open");

  // Close the modal when clicking the close button
  const closeModal = modal.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.remove(); // Remove modal from DOM when closed
  });

  // Close the modal if clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
      modal.remove(); // Remove modal from DOM when clicked outside
    }
  });
};
