import "../styles/style.css";
import reviews from "./reviews";

// Variables
const personImg = document.getElementById("person-img") as HTMLImageElement;
const author = document.getElementById("author") as HTMLHeadingElement;
const job = document.getElementById("job") as HTMLParagraphElement;
const info = document.getElementById("info") as HTMLParagraphElement;
const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
const random = document.getElementById("random") as HTMLButtonElement;
let index: number = 0;

// Functions
const getReviews = () => {
  const reviewsObj = reviews[index];
  personImg.src = reviewsObj.img;
  personImg.alt = reviewsObj.name;
  author.innerText = reviewsObj.name;
  job.innerText = reviewsObj.job;
  info.innerText = reviewsObj.text;
};

const prevReview = () => {
  index--;
  if (index < 0) {
    index = reviews.length - 1;
  }
  getReviews();
};

const nextReview = () => {
  index++;
  if (index > reviews.length - 1) {
    index = 0;
  }
  getReviews();
};

const randomReview = () => {
  index = Math.floor(Math.random() * reviews.length);
  getReviews();
};

// Event Listeners
window.addEventListener("DOMContentLoaded", getReviews);
prevBtn.addEventListener("click", prevReview);
nextBtn.addEventListener("click", nextReview);
random.addEventListener("click", randomReview);
