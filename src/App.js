// Import componenets
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import JobBoard from "./pages/JobBoard";
import Join from "./pages/Join";

// Import Styles
import "../src/_sass/main.css";

// Import React libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />

      <div id="content">
        <Switch>
          <Route exact path="/connect">
            <Connect />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/jobboard">
            <JobBoard />
          </Route>
          <Route exact path="/join">
            <Join />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <footer>
        <Footer />
        {/* <nav>
          <Navigation />
        </nav> */}
        <div className="divider-thin"></div>
        <p>© Copyright 2020 Ada's Team</p>
      </footer>
    </Router>
  );
}

export default App;
