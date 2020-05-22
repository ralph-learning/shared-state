import React from "react";
import "./App.css";

import reducers from "./reducers";
import { StateProvider } from "./State";

import Header from "./Header";
import Main from "./Main";

const initialState = {
  user: {
    age: "28",
    name: "Ralph Effting",
    isActivated: true,
  },
  basket: {},
};

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </StateProvider>
  );
}

export default App;
