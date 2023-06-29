async function getMoviesData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

let url = "https://www.omdbapi.com/?s=thor&apikey=53b4ed65";
let data = getMoviesData(url);

data.then((value) => {
  buildVideoCard(value);
});

let movieCounterid = 0;
//! This Function will build VideoCards and Append to DOM
function buildVideoCard(data) {
  let main = document.getElementById("main");
  main.innerHTML = "";

  data = data.Search;
  //   console.log(data.length);

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);

    let parentDiv = document.createElement("div");
    parentDiv.classList.add("video-card");
    // console.log(i);
    parentDiv.id = movieCounterid;
    movieCounterid++;

    let videoThumbnail = document.createElement("div");
    videoThumbnail.classList.add("video-thumbnail");

    let img = document.createElement("img");
    img.src = data[i]["Poster"];

    let heartIcon = document.createElement("div");
    heartIcon.classList.add("heart-icon");
    let icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-heart");
    heartIcon.appendChild(icon);

    videoThumbnail.appendChild(img);
    videoThumbnail.appendChild(heartIcon);

    parentDiv.appendChild(videoThumbnail);

    ////////////////////////////////////////////////////

    let videoDetails = document.createElement("div");
    videoDetails.classList.add("video-details");

    let h3 = document.createElement("h3");
    h3.classList.add("video-title");
    h3.innerText = data[i]["Title"];

    let p = document.createElement("p");
    p.classList.add("video-description");
    p.innerText = "Video description goes here.";

    let videoMetadata = document.createElement("div");
    videoMetadata.classList.add("video-metadata");

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    span1.classList.add("video-duration");
    span2.classList.add("video-views");
    span1.innerText = data[i]["Year"];
    span2.innerText = data[i]["imdbID"];

    videoMetadata.appendChild(span1);
    videoMetadata.appendChild(span2);

    videoDetails.appendChild(h3);
    videoDetails.appendChild(p);
    videoDetails.appendChild(videoMetadata);

    parentDiv.appendChild(videoDetails);

    // console.log(/parentDiv);

    main.appendChild(parentDiv);
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let search = document.getElementById("search");
  console.log(search.value);

  let userSearchMovie = `https://www.omdbapi.com/?s=${search.value}&apikey=53b4ed65`;

  let data = getMoviesData(userSearchMovie);
  data.then((value) => {
    buildVideoCard(value);
  });
});
