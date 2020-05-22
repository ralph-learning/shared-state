import React from "react";

import reducers from "./reducers";
import { StateProvider } from "./State";
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
