import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import SearchDetails from "./components/searchDetails";
import RepoDetail from "./components/repoDetail"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Navbar></Navbar> 
        <Route exact path="/" component={SearchDetails} /> 
        <Route exact path="/:user" component={RepoDetail} /> 
      </div>
    </Router>
    // <div className="App">
    //     <Navbar></Navbar>
    //     <div style={userDetails}>
    //         <SearchDetails></SearchDetails>
    //     </div>
    // </div>
  );
}

const userDetails={
  width: "80%",
  margin: 'auto',
  marginTop:"100px",
  display: "-webkit-inline-box"
}
export default App;
