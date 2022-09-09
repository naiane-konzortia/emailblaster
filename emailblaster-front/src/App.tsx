import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRedux } from "./hooks";
import './css/tailwind.css';
import { StartCampaign } from "./components";


const App = () => {
  return (
    <div className="bg-white h-screen w-screen overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<StartCampaign />}></Route>
        </Routes>
      </Router>
      </div>
  );
};

export default App;
