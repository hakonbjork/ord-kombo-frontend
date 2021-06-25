import React from "react";
import { get, post } from "../apis/word";
import Suggestion from "./Suggestion";

class App extends React.Component {
  URL = "http://localhost:8080/";
  state = { words: "" };

  getResults = async () => {
    const response = await get(this.URL + "words");
    this.setState({ words: response.data.body });
  };

  logResults = () => {
    console.log(this.state.words);
  };

  onAdjSubmit = (adj) => {
    post(this.URL + "suggestion", {
      adj: adj,
    });
  };

  onNounSubmit = (noun) => {
    post(this.URL + "suggestion", {
      sub: noun,
    });
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
        <Suggestion onFormSubmit={this.onAdjSubmit} wordType="Adjektiv" />
        <p></p>
        <Suggestion onFormSubmit={this.onNounSubmit} wordType="Substantiv" />
      </div>
    );
  }
}

export default App;
