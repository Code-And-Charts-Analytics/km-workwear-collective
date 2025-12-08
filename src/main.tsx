// src/main.tsx
import { createRoot } from "react-dom/client";
// *** CRITICAL FIX: Use HashRouter for static deployment (GitHub Pages) ***
import { HashRouter as Router } from "react-router-dom"; 
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // Wrap your entire application in the HashRouter
  <Router>
    <App />
  </Router>
);