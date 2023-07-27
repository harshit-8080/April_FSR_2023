import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is called");

    this.state = {
      movieDate: {
        Poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEgoovrV3JkLLIdZtBkGka12COB2nyn2XfSjSZGEg5w&s",
        Title: "Dummy Title",
        Year: "Dummy Year",
        Genre: "Dummy Genre",
        Actors: "Dummy Actors",
        Director: "Dummy Director",
        Awards: "Dummy Award",
      },
    };
  }

  async componentDidMount() {
    console.log("componentDidMount is called");

    let url = "https://www.omdbapi.com/?i=tt0371746&apikey=53b4ed65";
    let response = await fetch(url);
    let data = await response.json();

    console.log("data ==> ", data);

    setTimeout(() => {
      this.setState({ movieDate: data });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  
  render() {
    console.log("render is called");
    return (
      <div>
        <h1>Movie Card Component</h1>

        <img src={this.state.movieDate.Poster} alt="" />
        <h1>{this.state.movieDate.Title}</h1>
        <h1>{this.state.movieDate.Year}</h1>
        <h1>{this.state.movieDate.Genre}</h1>
        <h1>{this.state.movieDate.Actors}</h1>
        <h1>{this.state.movieDate.Director}</h1>
        <h1>{this.state.movieDate.Awards}</h1>
      </div>
    );
  }
}

export default Card;
