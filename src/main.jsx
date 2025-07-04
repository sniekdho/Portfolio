import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import RootLayout from "./layouts/RootLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootLayout></RootLayout>
  </StrictMode>
);
