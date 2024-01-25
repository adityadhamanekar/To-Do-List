"use strict";

const inputData = document.querySelector(".note__input");
const noteAdd = document.querySelector(".note__btn");
const noteList = document.querySelector(".note__list");

displayList();

noteAdd.addEventListener("click", () => {
  if (inputData.value) {
    const inputDataValue = inputData.value.trim();
    inputData.value = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(inputDataValue);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayList();
  }
});

function displayList() {
  noteList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const html = `<div class="note__item">
                <p class="note__text">${task}</p>
                <a href="#" class="note__delete">Delete</a>
            </div>`;

    noteList.insertAdjacentHTML("afterbegin", html);
  });

  
}


