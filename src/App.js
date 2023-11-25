import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
