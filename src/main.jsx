import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Papa from "./Brain/new.jsx"; // Importing the new file that contains the updated App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Papa /> {/* Using the new component instead of App */}
  </StrictMode>
);
