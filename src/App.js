
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/LogIn';
import Registercompo from './Components/Register';
import Tablecompo from './Components/AllSTudentTable';
import AddStudent from './Components/AddStudent';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div className="App">
        < Navbar />
        <Switch>

          <Route path="/LogIn">
          <Login/>

          </Route>
          <Route path='/register'>
          <Registercompo/>
          </Route>

          <Route path='/AllStudentTable'>
          <Tablecompo />
          </Route>

          <Route path='/AddStudent'>
          <AddStudent />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
