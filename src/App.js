import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './Inicio' 
import LogIn from './LogIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={LogIn} />
        <Route exact path="/Inicio" component={Inicio} />
      </Switch>
    </Router>
  );
}


export default App;
