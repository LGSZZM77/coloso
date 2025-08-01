import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Todolist from "./Todolist/Todolist.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
);
