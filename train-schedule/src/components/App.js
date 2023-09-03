import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTrains from "./alltrains";
// import SingleTrain from './singletrain';
import SingleTrain from "./SingleTrain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={AllTrains} />
        <Route path="/train/:trainNumber" component={SingleTrain} />
      </Routes>
    </Router>
  );
}

export default App;
