import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <div className="title">
          <h1>Lights Out</h1>
        
        </div>
        
        <Board ncols={8} nrows={8} chanceLightStartsOn={.99}/>
        <Board />
      </div>
  );
}

export default App;
