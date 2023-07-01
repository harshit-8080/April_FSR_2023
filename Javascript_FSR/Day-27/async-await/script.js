let btn = document.getElementById("btn");
btn.addEventListener("click", async function () {
  const data = await fetch("https://www.omdbapi.com/?s=iron&apikey=53b4ed65");
  const response = await data.json();
  console.log(response);
});
