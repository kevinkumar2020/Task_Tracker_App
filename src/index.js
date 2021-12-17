import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Router, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router> */}
  </StrictMode>,
  rootElement
);
