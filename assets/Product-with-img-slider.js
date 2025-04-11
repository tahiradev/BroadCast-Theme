document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".image-slider");
  let isDragging = false; // Track if dragging is active
  let startY; // Store initial cursor Y position
  let scrollTop; // Store initial scroll position

  slider.addEventListener("mousedown", (event) => {
    isDragging = true;
    startY = event.pageY - slider.offsetTop; // Get cursor position relative to the slider
    scrollTop = slider.scrollTop; // Save the current scroll position
    slider.style.cursor = "grabbing"; // Change cursor to grabbing
    slider.style.userSelect = "none"; // Disable text selection while dragging
  });

  slider.addEventListener("mousemove", (event) => {
    if (!isDragging) return; // Skip if dragging is not active
    const y = event.pageY - slider.offsetTop; // Current cursor position
    const walk = y - startY; // Calculate how much the cursor moved
    slider.scrollTop = scrollTop - walk; // Scroll the content
  });

  slider.addEventListener("mouseup", () => {
    isDragging = false; // Stop dragging
    slider.style.cursor = "grab"; // Restore cursor style
  });

  slider.addEventListener("mouseleave", () => {
    isDragging = false; // Stop dragging if the cursor leaves the slider
    slider.style.cursor = "grab";
  });
});


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
