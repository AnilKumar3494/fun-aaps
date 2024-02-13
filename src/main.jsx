import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Valentine from "./components/valentine/Valentine.jsx";
import { createBrowserRouter } from "react-router-dom";

//for deployment
const router = createBrowserRouter({
  path: "/fun-aaps/",
  element: <App />,
  children: [
    {
      path: "/fun-aaps/",
      element: <Valentine />,
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Valentine />
  </React.StrictMode>
);
