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
