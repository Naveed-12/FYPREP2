import Header from './Components/Header';
import './App.css';
import Dbody from './Components/Dbody';
import SignIn from './Components/SignIn';
import SignInform from './Components/form';
import './firebase/firebase'
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Map from './Components/Map'
import Area_guide from './Components/Area_guide';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <SignInform/>
          </Route>
          <Route exact path="/SignInform">
            <SignInform />
          </Route>
          <Route exact path="/Dashboard">
            <Header />
            <Dbody />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/Map">
            <Map />
          </Route>
          <Route path='/areaguides'>
            <Area_guide/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;