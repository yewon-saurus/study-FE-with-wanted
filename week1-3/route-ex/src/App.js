import React from "react";

import {RouterProvider} from "react-router-dom";

import { Button, Cat, Dog, Home, TextInput, TextOutput } from "./Components";
import useTextHooks from "./useTextHook";

import logo from "./logo.svg";
import "./App.css";

import router from "./router";

export const CatStore = React.createContext();

function App() {

  // useState
  // const [text, setText] = React.useState("perl");
  const [text, setText] = useTextHooks("perl");

  const input_ref = React.useRef(null);

  const changeText = (new_text) => {
    setText(new_text);
  };

  React.useEffect(() => {

  }, []);


  return (
    <div className="App">
      <CatStore.Provider value={{text, setText}}>
        <RouterProvider router={router}></RouterProvider>
      </CatStore.Provider>
    </div>
  );
}

export default App;