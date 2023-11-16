document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider-image");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    showImage(currentIndex);
    setInterval(nextImage, 3000);
  });
  
  function toggleNav() {
    var nav = document.querySelector('header nav ul');
    nav.classList.toggle('show');
  }