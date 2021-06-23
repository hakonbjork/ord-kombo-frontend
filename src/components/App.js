import React from "react";
import word from "../apis/word";

class App extends React.Component {
  state = { words: "" };

  getResults = async () => {
    const response = await word("http://localhost:8080/words");
    this.setState({ words: response.data.body });
  };

  logResults = () => {
    console.log(this.state.words);
  };

  render() {
    return (
      <div>
        <h1>Veldig fin app</h1>
        <p onClick={this.getResults}>Klikk for å få resultater </p>
        <p onClick={this.logResults}>Klikk her for å logge resultater</p>
        <p>
          Du er en: {this.state.words.adj} {this.state.words.sub}
        </p>
      </div>
    );
  }
}

export default App;
