function removeAll() {
  let list = document.getElementById("list");
  //   list.style.visibility = "hidden";
  list.innerHTML = "";
}

function removeFirstChild() {
  let list = document.getElementById("list");
  let firstChild = list.firstElementChild;
  list.removeChild(firstChild);
}

function removeLastChild() {
  let list = document.getElementById("list");
  let lastChild = list.lastElementChild;
  list.removeChild(lastChild);
}

function removeHeader() {
  let header = document.getElementById("logo");
  header.innerHTML = "";
  //   header.style.visibility = "  hidden";
}

function addToList() {
  let input = document.getElementById("todo");

  if (input.value && input.value.length > 2) {
    let li = document.createElement("li");
    li.innerText = input.value;
    input.value = "";

    let list = document.getElementById("list");
    list.appendChild(li);
  } else {
    alert("Empty Things can't be added");
  }
}
