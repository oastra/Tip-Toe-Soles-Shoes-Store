
//JavaScript function to toggle between images
    function changeImage() {
      let image1 = document.getElementById("image1");
      let image2 = document.getElementById("image2");

      if (image1.style.display === "block") {
        image1.style.display = "none";
        image2.style.display = "block";
      } else {
        image1.style.display = "block";
        image2.style.display = "none";
      }
    }