document.addEventListener("DOMContentLoaded", () => {
    // === HERO IMAGE SLIDESHOW ===
    const heroImages = document.querySelectorAll(".slideshow .hero-image");
    let heroIndex = 0;
  
    function showNextHeroImage() {
      heroImages[heroIndex].classList.remove("active");
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroImages[heroIndex].classList.add("active");
    }
  
    if (heroImages.length > 0) {
      heroImages[heroIndex].classList.add("active");
      setInterval(showNextHeroImage, 2000);
    }
  
    // === MULTIPLE PROJECT SLIDESHOWS ===
    document.querySelectorAll(".project-slideshow").forEach(slideshow => {
      const images = slideshow.querySelectorAll(".project-image");
      const prevBtn = slideshow.querySelector(".prev");
      const nextBtn = slideshow.querySelector(".next");
      let index = 0;
      let interval;
  
      function showImage(i) {
        images.forEach((img, j) => {
          img.classList.toggle("active", j === i);
        });
      }
  
      function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
      }
  
      function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
      }
  
      function startSlideshow() {
        interval = setInterval(nextImage, 2000);
      }
  
      function stopSlideshow() {
        clearInterval(interval);
      }
  
      if (images.length > 0) {
        showImage(index);
        startSlideshow();
  
        if (prevBtn && nextBtn) {
          prevBtn.addEventListener("click", () => {
            stopSlideshow();
            prevImage();
            startSlideshow();
          });
  
          nextBtn.addEventListener("click", () => {
            stopSlideshow();
            nextImage();
            startSlideshow();
          });
        }
      }
    });
  });
  