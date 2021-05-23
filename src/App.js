import "./Common.css";
import DashBoard from "./Components/DashBoard";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/folder/:foid">
            <DashBoard />
          </Route>
          <Route path="/">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
