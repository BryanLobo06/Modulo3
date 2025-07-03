const API_URL = 'http://localhost:3000/products';

const productList = document.getElementById('lista-productos');
const form = document.getElementById('form-producto');
const nameInput = document.getElementById('nombre');
const priceInput = document.getElementById('precio');

// Read products
async function getProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error fetching products');
    const products = await res.json();
    productList.innerHTML = '';
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} - $${product.price}`;
      // Delete button
      const btnDelete = document.createElement('button');
      btnDelete.textContent = 'Delete';
      btnDelete.onclick = () => deleteProduct(product.id);
      // Update button
      const btnUpdate = document.createElement('button');
      btnUpdate.textContent = 'Update';
      btnUpdate.onclick = () => updateProduct(product.id);
      li.appendChild(btnDelete);
      li.appendChild(btnUpdate);
      productList.appendChild(li);
    });
  } catch (error) {
    alert(error.message);
  }
}

// Create product
form.onsubmit = async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const price = parseFloat(priceInput.value);
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price })
    });
    if (!res.ok) throw new Error('Error creating product');
    form.reset();
    getProducts();
  } catch (error) {
    alert(error.message);
  }
};

// Delete product
async function deleteProduct(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error deleting product');
    getProducts();
  } catch (error) {
    alert(error.message);
  }
}

// Update product
// Allows updating the price and optionally the name (leave name empty to keep it unchanged)
async function updateProduct(id) {
  // Fetch current product data from backend
  let currentName = '';
  try {
    const resProduct = await fetch(`${API_URL}/${id}`);
    if (!resProduct.ok) throw new Error('Could not fetch product');
    const currentProduct = await resProduct.json();
    currentName = currentProduct.name;
  } catch (error) {
    alert('Error fetching current product');
    return;
  }
  // Prompt for new name (leave empty to keep current)
  const newName = prompt('New name (leave empty to keep current):', currentName);
  // Prompt for new price (required)
  const newPrice = prompt('New price:');
  if (!newPrice) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName ? newName : currentName, price: parseFloat(newPrice) })
    });
    if (!res.ok) throw new Error('Error updating product');
    getProducts();
  } catch (error) {
    alert(error.message);
  }
}

// Initialize
getProducts(); 