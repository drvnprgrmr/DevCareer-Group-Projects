const switchIcon = document.querySelector(".switch-image");
const body = document.querySelector("body");
const todoContainer = document.querySelector(".todo-list");
const todoList = document.querySelectorAll(".todo-list__item");
const summary = document.querySelector(".summary");
const addTask = document.querySelector(".add-task");
const inputTask = document.querySelector(".add-task__text");
const topTitle = document.querySelector(".top__title");
const banner = document.querySelector(".hero");
const numbersLeft = document.querySelector(".summary__items-left");

// ========== to toggle icon ======//
const toggleIcon = (icon) => {
  if (icon.getAttribute("src") === "images/icon-sun.svg") {
    icon.setAttribute("src", "images/icon-moon.svg");
  } else {
    icon.setAttribute("src", "images/icon-sun.svg");
  }
};

switchIcon.addEventListener("click", () => {
  toggleIcon(switchIcon);
  body.classList.toggle("light-mode");
  addTask.classList.toggle("light-mode");
  summary.classList.toggle("light-mode");
  todoList.forEach((item) => item.classList.toggle("light-mode"));
  topTitle.style.color = "white";
  banner.classList.toggle("banner-toggle");
});

// For the numbers left undone
// const items = [];
// const takeCount = (count) => {
//   items.push(count);
//   items.forEach(function (item) {
//     item.addEventListener("click", () => {
//       console.log("uue");
//     });
//   });

//   if (items.length !== 1) {
//     numbersLeft.textContent = `${items.length} items left`;
//   } else {
//     numbersLeft.textContent = `${items.length} item left`;
//   }
// };

const items = [];

// To add task
inputTask.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let task = inputTask.value;
    const html = `
        <li class="todo-list__item">
        <input
          type="checkbox"
          class="add-task__checkbox"
        />
        ${task}
      </li>
      `;
    todoContainer.insertAdjacentHTML("afterbegin", html);
    inputTask.value = "";

    items.push(html);
    console.log(html);

    items.forEach((ele) => {
      console.log("heee");
    });

    // takeCount(todoContainer);
  }
});
