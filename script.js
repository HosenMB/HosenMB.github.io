document.addEventListener("DOMContentLoaded", function () {
  const cvButton = document.getElementById("cvButton");
  if (cvButton) {
    cvButton.addEventListener("click", function () {
      window.open("Resume of Md Biplob Hosen.pdf", "_blank");
    });
  }
});
