const apiBaseURL = "https://fakestores.onrender.com/api/products";

export async function fetchProducts(limit = 6) {
  try {
    const response = await fetch(`${apiBaseURL}?limit=${limit}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw new Error(`${error.message}`);
  }
}
