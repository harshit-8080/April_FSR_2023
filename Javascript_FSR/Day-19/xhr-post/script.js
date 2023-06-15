let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // 1. make an object from XMLHttpRequest using new keyword..
  let xhr = new XMLHttpRequest();

  // 2. You have open api with a GET method
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

  xhr.responseType = "json";
  xhr.setRequestHeader("Content-Type", "application/json");

  // 3. You have added a event load listener, To console the response
  xhr.addEventListener("load", function () {
    let p = document.createElement("p");

    p.innerText = JSON.stringify(xhr.response, null, 2);

    document.body.appendChild(p);
  });

  xhr.addEventListener("error", function () {
    let p = document.createElement("p");

    p.innerText = "Failed to call and get data from API";

    document.body.appendChild(p);
  });

  // 4. You have send the request.

  let body = {
    userId: 11,
    id: 102,
    title: "This is my title",
    body: "this is my body",
  };
  xhr.send(JSON.stringify(body));
});
