const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c62a6e81ecb89737b6f177456588b48d&page=1";

const img_path = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");

async function fetch_data(url) {
  const response = await fetch(url);
  const data = await response.json();
  display_movie(data.results);
}

fetch_data(movie_api);

function display_movie(movies) {
  movies.map((movie) => {
    const { title, overview, poster_path, vote_average } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
        <div class="img">
            <img src="${img_path + poster_path}" alt="">
        </div>

        <div class="meta-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>

        <div class="overview">
            <p>${overview}</p>
        </div>
        `;

    main.appendChild(movieCard);
  });
}
