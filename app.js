function showBigPic(img) {
  document.querySelector(".big").src = img;
}

function path(color) {
  const path = document.querySelector(".background");
  path.style.background = color;
}

function bg(background) {
  const bg = document.querySelector(".container");
  bg.style.background = background;
}
