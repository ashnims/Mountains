import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Feature from "./Pages/Feature";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/main2" component={About} />
        <Route path="/slider" component={Feature} />
      </Switch>
    </Router>
  );
}

export default App;
