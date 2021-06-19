import "../scss/style.scss";

// Variables
const value = document.getElementById("value") as HTMLElement;
const decrease = document.getElementById("decrease") as HTMLElement;
const reset = document.getElementById("reset") as HTMLElement;
const increase = document.getElementById("increase") as HTMLElement;
let index: number = 0;

value.innerText = String(index);

const colors = () => {
  if (index > 0) {
    value.style.color = "green";
  } else if (index < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "rgb(16, 42, 66)";
  }
};

// Event Listeners
decrease.addEventListener("click", () => {
  index--;
  value.innerText = String(index);
  colors();
});

reset.addEventListener("click", () => {
  index = 0;
  value.innerText = String(index);
  colors();
});

increase.addEventListener("click", () => {
  index++;
  value.innerText = String(index);
  colors();
});
