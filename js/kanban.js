"use strict";

let order = 1;
let adding = false;

const error = document.querySelector(".error");
const message = "Please add a description.";

const add_btn = document.querySelector(".add");

add_btn.addEventListener("click", () => {
  const target = document.querySelector("#requested");
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement("div");
  item.classList.add("item");
  item.setAttribute("id", "item-");
  item.innerHTML = "order";
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });

  item.addEventListener("dragend", (e) => {
    e.dataTransfer.clearData();
  });

};

document.querySelectorAll(".drop").forEach((element) => {});
