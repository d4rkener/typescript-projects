import "./style.css";
import axios from "axios";

// Variables
const btn = document.getElementById("btn") as HTMLButtonElement;
const content = document.getElementById("content") as HTMLParagraphElement;

btn.addEventListener("click", async () => {
  const res = await axios.get("https://api.chucknorris.io/jokes/random");
  const data = await res.data.value;
  content.textContent = data;
});
