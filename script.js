const images = [
    "chickenPlate.jpg",
    "chickenRoast.jpg",
  ];
  
  let index = 0;
  const sliderImage = document.getElementById("sliderImage");
  
  setInterval(() => {
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
  }, 3000); // 3 seconds change