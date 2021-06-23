import React, { useState } from "react";

const Suggestion = (props) => {
  const [adj, setAdj] = useState("");
  const [noun, setNoun] = useState("");

  const onInputChangeAdj = (event) => {
    setAdj(event.target.value);
  };

  const onInputChangeSub = (event) => {
    setNoun(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit");

    props.onFormSubmit([adj, noun]);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>Adjektiv forslag: </label>
        <input
          type="text"
          value={adj}
          onChange={onInputChangeAdj}
          onSubmit={onFormSubmit}
        />
        <p></p>
        <label>Substantiv forslag: </label>
        <input
          type="text"
          value={noun}
          onChange={onInputChangeSub}
          onSubmit={onFormSubmit}
        />
      </form>
    </div>
  );
};

export default Suggestion;
