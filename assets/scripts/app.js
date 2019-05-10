document.addEventListener("DOMContentLoaded", () => {
  let position = 0;
  let allImages = document.querySelectorAll(".splash__image");

  setInterval(function() {
    position = position - 100;

    if (position == -300) {
      position = 0;
    }
    allImages[0].style.transform = `translate(${position}%)`;
    allImages[1].style.transform = `translate(${position}%)`;
    allImages[2].style.transform = `translate(${position}%)`;
  }, 5000);
});
