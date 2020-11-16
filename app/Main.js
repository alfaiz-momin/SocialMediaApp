import React from "react";
import ReactDOM from "react-dom";

function ExampleComponent() {
  return (
    <div>
      <h1>This is heading</h1>
      <p>This is Paragraph</p>
    </div>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));
