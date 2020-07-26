import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from "./containers/CardContainer";

function App() {
  return (
    <div className="App">
      <h3 className="mt-4">Context Counter</h3>
      <CardContainer/>
    </div>
  );
}

export default App;
