import React from 'react';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import './App.css';


function App() {
  return (
    <div className="App">
    
    <Sidebar/>
    <Feed/>
    <Widget/>
       
    </div>
  );
}

export default App;
