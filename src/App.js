
import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Home Page ';
import ContactPage from './Contact Page ';
import NotFound from './404 Page ';
import Users from './Users Page ';

const App = () => {
  return (
    <div className="App">
      <Router>
            
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/users">Users</Link>
                     </li>
                     <li>
                         <Link to="/contact">Contact</Link>
                     </li>
                 </ul>
                 <Switch>
                     <Route exact path="/">
                         <HomePage />
                     </Route>
                     <Route path="/users/:id">
                         <Users />
                     </Route>
                     <Route path="/users">
                         <Users />
                     </Route>
                     <Route path="/contact" >
                         <ContactPage />
                     </Route>
                     <Route path="/*">
                       <NotFound/>
                     </Route>
                 </Switch>
             
         </Router>
    </div>
  );
}

export default App;
