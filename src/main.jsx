import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"



const appEL = document.querySelector("#app")
const root = createRoot(appEL)

root.render(
    <App />
);

import App from "./App";