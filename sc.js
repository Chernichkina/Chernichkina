const image = document.getElementById("clickableImage");
const sound = document.getElementById("sound");

const originalSrc = image.src;
const newSrc = "src/rika2.png";

image.addEventListener("click", () => {
  sound.play();
  image.src = newSrc;

  sound.onended = () => {
    image.src = originalSrc;
  };
});