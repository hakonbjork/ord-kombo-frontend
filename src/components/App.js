import React from "react";
import word from "../apis/word";
import Suggestion from "./Suggestion";

class App extends React.Component {
  state = { words: "" };

  getResults = async () => {
    const response = await word("http://localhost:8080/words");
    this.setState({ words: response.data.body });
  };

  logResults = () => {
    console.log(this.state.words);
  };

  onSearchSubmit = ([terms]) => {
    console.log(terms[0]);
    console.log(terms[1]);
    console.log("Skjer det noe?");
  };

  render() {
    return (
      <div>
        <h1>Ord-kombo 1.0</h1>
        <button onClick={this.getResults}>Klikk for nye ord</button>
        <button onClick={this.logResults}>Logg resultater i konsoll</button>
        <p>
          Du er en: {this.state.words.adj} {this.state.words.sub}
        </p>
        <Suggestion onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
