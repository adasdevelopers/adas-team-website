// Import componenets
import Footer from "./components/Footer";
import Nav from './components/Navigation';

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import JobBoard from "./pages/JobBoard";
import Join from "./pages/Join";

// Import React libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "animate.css/animate.min.css";


/**
 * Renders the entire website
 * @returns App
 */
function App() {
  return (

    <div>
      <Router className="App" basename="/">
        <Nav />

            {/* Routers */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/faq">
                    <FAQ />
                </Route>
                <Route exact path="/events">
                    <Events />
                </Route>
                <Route exact path="/jobboard">
                    <JobBoard />
                </Route>

                <Route exact path="/join">
                    <Join />
                </Route>
                <Route exact path="/connect">
                    <Connect />
                </Route>
            </Switch>


        <Footer className="absolute inset-x-0 bottom-0 w-full"/>

      </Router>

    </div>



  );
}

export default App;
