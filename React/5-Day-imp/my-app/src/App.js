import "./App.css";
import User from "./User";
import MovieCard from "./MovieCard";

const data = [
  {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man 3",
    Year: "2013",
    imdbID: "tt1300854",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man 2",
    Year: "2010",
    imdbID: "tt1228705",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "The Iron Giant",
    Year: "1999",
    imdbID: "tt0129167",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
  },
  {
    Title: "The Man in the Iron Mask",
    Year: "1998",
    imdbID: "tt0120744",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Fist",
    Year: "2017–2018",
    imdbID: "tt3322310",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg",
  },
  {
    Title: "The Iron Lady",
    Year: "2011",
    imdbID: "tt1007029",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg",
  },
  {
    Title: "Iron Sky",
    Year: "2012",
    imdbID: "tt1034314",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg",
  },
  {
    Title: "The Man with the Iron Fists",
    Year: "2012",
    imdbID: "tt1258972",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg",
  },
  {
    Title: "3-Iron",
    Year: "2004",
    imdbID: "tt0423866",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzBmODdkMzItNTk0NS00MDc5LWFmZjgtNmNlZmNhMzFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg",
  },
  {
    Title: "Thor",
    Year: "2011",
    imdbID: "tt0800369",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Ragnarok",
    Year: "2017",
    imdbID: "tt3501632",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
  },
  {
    Title: "Thor: The Dark World",
    Year: "2013",
    imdbID: "tt1981115",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Love and Thunder",
    Year: "2022",
    imdbID: "tt10648342",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Team Thor",
    Year: "2016",
    imdbID: "tt6016776",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Tales of Asgard",
    Year: "2011",
    imdbID: "tt1667903",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Team Thor: Part 2",
    Year: "2017",
    imdbID: "tt6599818",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
  },
  {
    Title: "Valhalla - The Legend of Thor",
    Year: "2019",
    imdbID: "tt8956872",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA0OGZjODctYjg2ZS00YWQ1LWEyZjgtMDZkNmYyZDAwYzg0XkEyXkFqcGdeQXVyMzcwNjA5Mzg@._V1_SX300.jpg",
  },
  {
    Title: "Almighty Thor",
    Year: "2011",
    imdbID: "tt1792794",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Thor: Finding Korg",
    Year: "2018",
    imdbID: "tt8513006",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg",
  },
  {
    Title: "Captain America: The Winter Soldier",
    Year: "2014",
    imdbID: "tt1843866",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
  },
  {
    Title: "Captain America: The First Avenger",
    Year: "2011",
    imdbID: "tt0458339",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
  },
  {
    Title: "Captain America: Civil War",
    Year: "2016",
    imdbID: "tt3498820",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
  },
  {
    Title: "Captain Marvel",
    Year: "2019",
    imdbID: "tt4154664",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
  },
  {
    Title: "Captain Phillips",
    Year: "2013",
    imdbID: "tt1535109",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODhiZWRhMjctNDUyMS00NmUwLTgwYmItMjJhOWNkZWQ3ZTQxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Captain Fantastic",
    Year: "2016",
    imdbID: "tt3553976",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg",
  },
  {
    Title: "Sky Captain and the World of Tomorrow",
    Year: "2004",
    imdbID: "tt0346156",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0NDQzMDA1NF5BMl5BanBnXkFtZTcwNTU3ODAzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Captain Corelli's Mandolin",
    Year: "2001",
    imdbID: "tt0238112",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzc0MmRmZDAtZWRjYi00ODM3LTllZDEtNjljMjNiMzgxZDcyXkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_SX300.jpg",
  },
  {
    Title: "Captain Underpants: The First Epic Movie",
    Year: "2017",
    imdbID: "tt2091256",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmQwMzdiOGMtNGZiYS00YjgyLWJlMjItYzQ3Nzc2OGIwYjQwXkEyXkFqcGdeQXVyMzQ1MTM3NjY@._V1_SX300.jpg",
  },
  {
    Title: "Captain Ron",
    Year: "1992",
    imdbID: "tt0103924",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWZkYTk4YjAtZmViZS00ZTY5LWE2YmItOGQ3Y2Y0N2MzODkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
];
function App() {
  return (
    <div>
      {data.map((m) => {
        return <MovieCard sunil={m} />;
      })}
    </div>
  );
}

export default App;

/*

 questions 1: How to pass Props ??


*/
