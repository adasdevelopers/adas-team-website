// Import componenets
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import JobBoard from "./pages/JobBoard";
import Join from "./pages/Join";

// Import Styles
import "../src/_sass/main.scss";

// Import React libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div>

      <div id="body">
        <Router className="App">
          <Header />

          <div id="content">
            <div className="md:container md:mx-auto">
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
                <Route exact path="/jobboard">
                  <JobBoard />
                </Route>
                </Route>
                <Route exact path="/join">
                  <Join />
                </Route>
                <Route exact path="/connect">
                  <Connect />
                </Route>
              </Switch>
            </div>

          </div>
        </Router>
      </div>
 

      <Footer className="absolute inset-x-0 bottom-0 w-full"/>


    </div>
   


  );
}

export default App;
