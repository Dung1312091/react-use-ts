import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import UseEvent from "./containers/useEvent";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
