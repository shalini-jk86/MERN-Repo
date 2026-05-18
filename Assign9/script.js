const API_URL = "https://fakestoreapi.com/products";
const productList = document.getElementById("productList");
const productForm = document.getElementById("productForm");
const searchInput = document.getElementById("search");

let editingId = null;

// Fetch and display products
async function fetchProducts() {
  productList.innerHTML = "Loading...";
  try {
    const res = await fetch(API_URL);
    const products = await res.json();
    displayProducts(products);
  } catch (err) {
    productList.innerHTML = "Error loading products!";
    console.error(err);
  }
}

function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>Price: $${p.price}</p>
      <p>Category: ${p.category}</p>
      <button onclick="editProduct(${p.id})">Edit</button>
      <button onclick="deleteProduct(${p.id})">Delete</button>
    `;
    productList.appendChild(div);
  });
}

// Add or Update product
productForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const product = {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    description: document.getElementById("description").value,
    image: document.getElementById("image").value
  };

  try {
    if (editingId) {
      await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
      editingId = null;
    } else {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" }
      });
    }
    fetchProducts();
    productForm.reset();
  } catch (err) {
    console.error("Error saving product:", err);
  }
});

// Edit product
async function editProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const p = await res.json();
  document.getElementById("title").value = p.title;
  document.getElementById("price").value = p.price;
  document.getElementById("category").value = p.category;
  document.getElementById("description").value = p.description;
  document.getElementById("image").value = p.image;
  editingId = id;
}

// Delete product
async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchProducts();
}

// Search products
searchInput.addEventListener("input", async () => {
  const res = await fetch(API_URL);
  const products = await res.json();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  displayProducts(filtered);
});

// Initial load
fetchProducts();
