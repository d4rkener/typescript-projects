import "../styles/style.css";
import menu from "./menu";

// Variables
const btnContainer = document.getElementById("btnContainer") as HTMLElement;
const menuContainer = document.getElementById("menuContainer") as HTMLElement;

// Functions
const getAllMenus = () => {
  let html: string = "";
  let buttons: string[] = [];
  let buttonHtml: string = "";
  let filteredMenusHtml: string = "";

  menu.forEach((food) => {
    html += `
    <article class="menu-item">
      <img src="${food.img}" class="photo" alt="${food.title}" />
      <div class="item-info">
        <header>
          <h4>${food.title}</h4>
          <h4 class="price">$${food.price}</h4>
        </header>
        <p class="item-text">${food.desc}</p>
      </div>
    </article>
    `;

    buttons.push(food.category);
  });

  let filteredButtons = [...new Set(buttons)];

  filteredButtons.forEach((button: string) => {
    buttonHtml += `
    <button class="filter-btn" type="button" data-id="${button}">${button}</button>
    `;
  });

  btnContainer.innerHTML += buttonHtml;
  menuContainer.innerHTML = html;

  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let text: string | null = btn.textContent;

      console.log(text);

      let filteredMenus = menu.filter((menu) => {
        return menu.category === text;
      });

      filteredMenus.forEach((food) => {
        filteredMenusHtml += `
        <article class="menu-item">
          <img src="${food.img}" class="photo" alt="${food.title}" />
          <div class="item-info">
            <header>
              <h4>${food.title}</h4>
              <h4 class="price">$${food.price}</h4>
            </header>
            <p class="item-text">${food.desc}</p>
          </div>
        </article>
        `;
      });

      menuContainer.innerHTML = filteredMenusHtml;
    });
  });
};

// Event Listeners
window.addEventListener("DOMContentLoaded", getAllMenus);
