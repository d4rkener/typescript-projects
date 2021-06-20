import axios from "axios";
import "./style.css";

// Variables
const form = document.getElementById("form") as HTMLFormElement;
const search = document.getElementById("search") as HTMLInputElement;
const main = document.getElementById("main") as HTMLElement;
const APIURL = "https://api.github.com/users/";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { data } = await axios.get(APIURL + search.value);

  let html: string = `
  <div class="card">
    <div>
      <img class="avatar" src="${data.avatar_url}" alt="${data.name}"
    </div>
    <div class="user-info">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <ul>
        <li>${data.followers} <strong>Followers</strong></li>
        <li>${data.following} <strong>Following</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
  `;

  // console.log(data);

  getRepos(search.value);

  main.innerHTML = html;
});

const getRepos = async (username: string) => {
  const { data } = await axios.get(APIURL + username + "/repos?sort=created");

  addReposToCard(data);
};

const addReposToCard = (repos: any) => {
  const reposEl = document.getElementById("repos") as HTMLElement;

  repos.slice(0, 5).forEach((repo: any) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};
