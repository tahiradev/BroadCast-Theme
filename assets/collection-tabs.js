  // Tabs Script
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Add active to clicked tab
      tab.classList.add("active");
      const tabId = tab.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
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


  // Color Swatches
  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slide').forEach(slide => {
      const mainImg = slide.querySelector('.product-main-image');
      const swatches = slide.querySelectorAll('.swatch');

      if (!mainImg) return;
      const defaultImg = mainImg.getAttribute('data-default');

      swatches.forEach(swatch => {
        swatch.addEventListener('mouseenter', () => {
          const img = swatch.getAttribute('data-variant-img');
          if (img) {
            mainImg.setAttribute('src', img);
          }
        });

        swatch.addEventListener('mouseleave', () => {
          mainImg.setAttribute('src', defaultImg);
        });
      });
    });
  });
