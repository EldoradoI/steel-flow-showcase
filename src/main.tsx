import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// 👇 У деві ('/') для Lovable, у проді ('/steel-flow-showcase') для GitHub Pages
const baseName = import.meta.env.PROD ? "/steel-flow-showcase" : "/";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>
);
