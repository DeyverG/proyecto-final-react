import './App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import InfoCharacter from './pages/InfoCharacter';
import Information from './pages/Information';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Character" component={InfoCharacter} />
        <Route exact path="/Favorite" component={Favorite}/>
        <Route exact path="/Information" component={Information}/>
      </Switch>
    </Router>
  );
}

export default App;
