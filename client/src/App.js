import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

// components
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => {
          return <Login {...props} setIsLoggedIn={setIsLoggedIn} />
        }} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
