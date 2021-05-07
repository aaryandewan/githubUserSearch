import React from "react";
import { useEffect, useState, useContext } from "react";
// import { Button, Row, Col, Alert } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaRedditAlien } from "react-icons/fa";

// import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubContextIm from "./context/context";

function App() {
  const ab = useContext(GithubContextIm.GithubContext);
  console.log(ab);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
