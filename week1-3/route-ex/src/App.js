import "./App.css";

import React from "react";
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;