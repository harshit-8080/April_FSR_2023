// let header = document.getElementById("header");

// console.log(header);
// console.log(header.innerText);
// header.innerText = " <p> New Logo </p>";
// header.innerHTML = "<p> New Logo </p>";
// header.textContent = "New Logo using Text Content";

// header.style.color = "Blue";
// header.style.fontSize = "10px";

function changeColorToRed() {
  let header = document.getElementById("header");
  header.style.color = "red";
}

function changeColorToBlue() {
  let header = document.getElementById("header");
  header.style.color = "blue";
}

function HidePara() {
  let paras = document.getElementsByClassName("para");
  paras[0].style.visibility = "hidden";
  paras[1].style.visibility = "hidden";
}

function ShowPara() {
  let paras = document.getElementsByClassName("para");
  paras[0].style.visibility = "visible";    
  paras[1].style.visibility = "visible";
}
