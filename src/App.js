import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComputerScience from "./components/technologies/ComputerScience";
import Homepage from "./pages/Homepage";
import Header from "./components/header/Header";
import WebSkills from './components/Skills/CSSKills/WebSkills'


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Switch>
          <Route path="/computer" component={ComputerScience} />
          <Route path="/webdev" component={WebSkills} />
          <Route exect path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
