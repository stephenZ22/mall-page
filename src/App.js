// src/App.js

import React from "react";
import AppRouter from "./routers/AppRouter";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <h1>Mall</h1>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
