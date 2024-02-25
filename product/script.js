// Fetch products from API
fetch('https://api.noroff.dev/api/v1/rainy-days')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
      // Render products in the table
      renderProducts(data);
    }
  })
  .catch(error => console.error('Error fetching products:', error));

function renderProducts(products) {
  const tableBody = document.getElementById('productTableBody');
  let row;

  products.forEach((product, index) => {
    if (index % 2 === 0) {
      row = document.createElement('tr');
      tableBody.appendChild(row);
    }

    const cell = document.createElement('td');
    cell.innerHTML = `
      <td>
        <center>
          <img src="${product.image}" alt="${product.title}" style="width: 100px; height: auto;">
          <p>
            <center>
              <a href="product_details.html?id=${product.id}">${product.title}</a>
            </center>
          </p>
          <center>
            <strike>$${product.price}</strike>
            <span class='price'>$${product.discountedPrice}</span>
            <span class='cart'>
              <button class="addToCartButton" onclick="addToCart('${product.id}')">
                Add To Cart
              </button>
            </span>
          </center>
        </center>
      </td>`;
    row.appendChild(cell);
  });
}

function addToCart(productId) {
  // Retrieve the current cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new product ID to the cart items array
  cartItems.push(productId);

  // Save the updated cart items array back to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Alert the user that the product has been added to the cart (optional)
  alert(`Product with ID ${productId} added to cart`);

  // Redirect the user to the cart page
  window.location.href = 'cart.html';
}
