import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
