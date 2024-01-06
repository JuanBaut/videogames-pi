import React from "react"
import ReactDOM from "react-dom/client"
// import { store } from "./app/store"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// DO NOT FORGET TO ADD PROVIDER FOR REDUX STORE
