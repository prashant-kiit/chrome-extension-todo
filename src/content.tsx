import "./index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const root = document.createElement("div");
root.id = "taskmaster_container";
document.body.append(root);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
