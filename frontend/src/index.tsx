import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
