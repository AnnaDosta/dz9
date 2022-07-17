let arr = [];
let form = document.querySelector("form");

const createElement = function (value) {
  let li = document.createElement("li");
  li.id = arr.length;

  let label = document.createElement("label");
  label.setAttribute("class", "toDoElement");

  let span = document.createElement("span");
  span.textContent = value;

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("click", function (event) {
    if (input.checked == true) {
      span.setAttribute("class", "selected");
    } else {
      span.removeAttribute("class");
    }
  });

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function (event) {
    let newValue = prompt("Введите задачу", span.textContent);
    span.textContent = newValue;
  });

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function (event) {
    document.getElementById("list").removeChild(li);
  });

  label.appendChild(input);
  label.appendChild(span);
  label.appendChild(editButton);
  label.appendChild(deleteButton);
  li.appendChild(label);

  return li;
};

const add = function (value) {
  let list = document.getElementById("list");
  list.appendChild(createElement(value));
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.getElementById("taskName");
  arr.push(input.value);
  add(input.value);
  input.value = "";
});
