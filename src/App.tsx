import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { UseEvent, UseGeolocation, UseIntersection } from "./containers";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ width: 250, backgroundColor: "#F6F9FC", padding: 20 }}>
          <Navbar />
        </div>
        <div style={{ padding: 20 }}>
          <Switch>
            <Route path="/use-event">
              <UseEvent />
            </Route>
            <Route path="/use-getlocation">
              <UseGeolocation />
            </Route>
            <Route path="/use-intersection">
              <UseIntersection />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
