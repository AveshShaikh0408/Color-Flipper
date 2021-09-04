// Elements selection
const btnClick = document.querySelector(".btn-click");
const spanEl = document.querySelector(".color");

// Randon HexCode Generator Function
const get_random_color = () => {
  let letters = "01234567ABCDE".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

// Event Lister on Click
btnClick.addEventListener("click", () => {
  let newColor = get_random_color();
  document.body.style.backgroundColor = newColor;
  spanEl.textContent = spanEl.style.color = newColor;
});
