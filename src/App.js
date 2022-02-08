import axios from "axios";
import React from "react";
import Movie from "./Movie";

class App extends React.Component {

  // state는 변경해야 하는 데이터들을 모아두는 곳
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  // 위 함수는 React.Component에서 가져온 함수이며 처음에 마운트되었을 때 실행되는 함수이다. 
  componentDidMount() {
    this.getMovies();
  }

  render() {

    const { isLoading, movies } = this.state; // 이 변수는 this.state.isloding과 같다
    return (
      <div>
        { isLoading ? "Loading..." : movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image} 
          />
        ))}
      </div>
    );

  }
}

export default App;
