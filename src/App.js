
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
