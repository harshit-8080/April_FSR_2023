let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let input = document.getElementById("movie");

  // 1. make an object from XMLHttpRequest using new keyword..
  let xhr = new XMLHttpRequest();

  let url = `http://www.omdbapi.com/?s=${input.value}&apikey=53b4ed65`;

  // 2. You have open api with a GET method
  xhr.open("GET", url);

  xhr.responseType = "json";

  // 3. You have added a event load listener, To console the response
  xhr.addEventListener("load", function () {
    console.log(typeof xhr.response);

    console.log(xhr.response.Search);

    for (let i = 0; i < xhr.response.Search.length; i++) {
      let image = document.createElement("img");

      image.classList.add("movie-card");
      image.src = xhr.response.Search[i].Poster;

      document.body.appendChild(image);
    }

    // let p = document.createElement("p");

    // p.innerText = JSON.stringify(xhr.response, null, 2);

    // document.body.appendChild(p);
  });

  xhr.addEventListener("error", function () {
    let p = document.createElement("p");

    p.innerText = "Failed to call and get data from API";

    document.body.appendChild(p);
  });

  // 4. You have send the request.
  xhr.send();
});
