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

  function submitForm() {
    // Get form data
    var formData = new FormData(document.getElementById("reservationForm"));

    // Send AJAX request to reservation_process.php
    fetch('form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response
        alert(data.message);
        if (data.success) {
            // Optionally, you can redirect or perform other actions upon successful reservation
        }
    })
    .catch(error => console.error('Error:', error));
}