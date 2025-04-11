 // Quick ADD Button

document.querySelectorAll('.quick-add-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      // Add product to cart
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      // Update cart count (optional)
      fetch('/cart.js')
        .then(res => res.json())
        .then(cart => {
          if (document.querySelector('.cart-count')) {
            document.querySelector('.cart-count').textContent = cart.item_count;
          }
        });

      // Open the cart drawer
      const cartDrawer = document.querySelector('cart-drawer');
      if (cartDrawer) {
        cartDrawer.open(); // Built-in method in Dawn & other modern themes
      } else {
        // Fallback: Manually trigger the drawer (if no built-in method)
        document.body.classList.add('drawer-open');
        document.querySelector('.cart-drawer').classList.add('open');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});