import React, { useState } from "react";

const Suggestion = (props) => {
  const [word, setWord] = useState("");

  const onInputChange = (event) => {
    setWord(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(word);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>{props.wordType} forslag: </label>
        <input type="text" value={word} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default Suggestion;
