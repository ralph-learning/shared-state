import React from "react";

import { StateProvider } from "./State";
import reducers from "./reducers";
import initialState from "./initialData";

import Header from "./Header";
import Main from "./Main";

import "./App.css";

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
