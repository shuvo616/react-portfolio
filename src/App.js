import React from "react";
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NoMatch from "./components/NoMatch/NoMatch";
import ReactProject from "./components/ReactProject/ReactProject";
import JavascriptProject from "./components/JavascriptProject/JavascriptProject";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import MongoDb from "./components/MongoDb/MongoDb";
import MyProject from "./components/MyProject/MyProject";
import Service from "./components/Service/Service";
import MyEducation from "./components/MyEducation/MyEducation";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/Education">
          <MyEducation></MyEducation>
        </Route>

        <Route path="/service">
         <Service></Service>
        </Route>

        <Route path="/project">
         <MyProject></MyProject>
        </Route>

        <Route path="/ReactProject">
          <ReactProject></ReactProject>
        </Route>

        <Route path="/mongoDbProject">
          <MongoDb></MongoDb>
        </Route>

        <Route path="/JavascriptProject">
          <JavascriptProject></JavascriptProject>
        </Route>

        <Route path="/Skill">
          <Skill></Skill>
        </Route>

        <Route path="/Contact">
          <Contact></Contact>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
      
    </Router>

  );
}

export default App;
