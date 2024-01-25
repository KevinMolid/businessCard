/* Imports */
import React from "react"
import ReactDOM from "react-dom/client"

import './style.css'

/* Elements */
import App from "./App.jsx"

/* Root */
const root = ReactDOM.createRoot(document.getElementById("root"))

/* Render */
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)