import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked \n" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleDownClick = () => {
    // console.log("Lowercase was clicked \n" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    // console.log("Lowercase was clicked \n" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   setText("cfgycghcgh");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === `dark` ? `white` : `#042743`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === `dark` ? `grey` : `white`,
              color: props.mode === `dark` ? `white` : `#042743`,
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Covert To UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Covert To lowercase
        </button>{" "}
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === `dark` ? `white` : `#042743`,
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter(Boolean).length} words, {text.length}{" "}
          characters
        </p>

        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
