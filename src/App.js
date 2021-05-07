import React from "react";
import { useEffect, useState, useContext } from "react";
// import { Button, Row, Col, Alert } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaRedditAlien } from "react-icons/fa";

// import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Repos from "./components/Repos";
import Info from "./components/Info";
import { GitHubCustomHook } from "./context/context";

function App() {
  const ab = GitHubCustomHook();
  // console.log("hi");
  // console.log(ab);
  return (
    <div>
      {/* <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
      <Info />
      <Repos />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
