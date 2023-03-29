import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world !</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   root.render(element);
// }

// setinterval(tick,1000);

const elementWithJSX = (
  <div>
    <h1>Hello world !</h1>
    <h1>My name is woohyun :)</h1>
    <h2>This is a element with JSX.</h2>
  </div>
);

const element = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello, world !"),
  React.createElement("h1", null, "My Name is woohyun :)"),
  React.createElement("h2", null, "This is a element with 'createElement'")
);

// root.render(element);
root.render(element);
