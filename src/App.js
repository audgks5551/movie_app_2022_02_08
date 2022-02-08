import axios from "axios";
import React from "react";

class App extends React.Component {

  // state는 변경해야 하는 데이터들을 모아두는 곳
  state = {
    isLoading: true,
    movie: []
  }

  // 위 함수는 React.Component에서 가져온 함수이며 처음에 마운트되었을 때 실행되는 함수이다. 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  } // setState를 사용하여 isLoading을 false로 변경(setState는 state를 수정 후 render()를 실행한다.)

  render() {

    const { isLoading } = this.state; // 이 변수는 this.state.isloding과 같다
    return (
      <div>
        { isLoading ? "Loading..." : "We are Ready" }
      </div>
    );

  }
}

export default App;
