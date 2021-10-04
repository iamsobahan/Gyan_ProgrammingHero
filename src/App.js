import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";

import Service from "../src/Components/Service/Service";

import Contact from "../src/Components/Contact/Contact";
import About from "../src/Components/About/About";
import Header from "./Components/Header/Header";
import Notfound from "./Components/Notfound/Notfound";
import Footer from "./Components/Footer/Footer";
import Teacher from "./Components/Teacher/Teacher";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/teacher">
            <Teacher></Teacher>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
