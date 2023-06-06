const h1 = document.createElement("h1");

h1.innerText = "Swapnil - Durga - Harshit";

let box = document.getElementById("box");
box.appendChild(h1);

//////////////////////////////////////////////////////////

const p = document.createElement("p");
p.innerText = "My Content is good My Content is good My Content is good ";

box.appendChild(p);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let pp = document.querySelector("#p1");
// let pp = document.querySelector(".p1");
// let pp = document.querySelector("p");
let pp = document.querySelectorAll("p");
console.log(pp);
pp[0].style.color = "green";
pp[1].style.color = "green";
