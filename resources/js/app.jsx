import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap";
import Register from "./components/Register";

if (document.getElementById("register")) {
    const rootElement = ReactDOM.createRoot(
        document.getElementById("register")
    );

    rootElement.render(
        <React.StrictMode>
            <Register />
        </React.StrictMode>
    );
}
