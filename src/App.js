import axios from "axios";
import React from "react";

class App extends React.Component {

  state = {
    isLoading: true,
    movie: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {

    const { isLoading } = this.state;
    return (
      <div>
        { isLoading ? "Loading..." : "We are Ready" }
      </div>
    );

  }
}

export default App;
