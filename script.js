// calculate the price and items as list

let cart = [];
let totalAmount = 0.0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  totalAmount += price;

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalAmountElement = document.getElementById('total-amount');

  if (cart.length === 0) {
    cartItemsElement.innerHTML = '<p>No items in the cart.</p>';
  } else {
    let cartItemsHTML = '<ul>';
    cart.forEach(item => {
      cartItemsHTML += `<li>${item.productName} - $${item.price.toFixed(2)}</li>`;
    });
    cartItemsHTML += '</ul>';

    cartItemsElement.innerHTML = cartItemsHTML;
  }

  totalAmountElement.innerText = totalAmount.toFixed(2);
}


// navigate into card option page
function navigateToCardPage() {
    window.location.href = 'card.html';
  }
  

 
  