// Import componenets
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation2 from './components/Navigation2';

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

function App() {
  return (

    <div>
      <Router className="App">
        <div id="body">
            {/* <Navigation2 /> */}
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
                </div>
            </div>

        </div>

        <Footer className="absolute inset-x-0 bottom-0 w-full"/>

      </Router>

    </div>
   


  );
}

export default App;
