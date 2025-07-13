import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// vite will automatically inject into index (React 18 syntax)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
