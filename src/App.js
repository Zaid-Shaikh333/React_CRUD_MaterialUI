//import logo from './logo.svg';
import './App.css';
import { CreateForm } from './components/Create'
import { ReadData} from './components/Read'
import { Update } from './components/Update'
import { Button } from '@material-ui/core'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <h3 className="text-center mt-5">React Fake API CRUD</h3>
        <div className="text-center">
          <Link to="/create" className="text-decoration-none"><Button variant="contained" color="primary" className="mx-3">Create Fake Record</Button></Link>
          <Link to="/read" className="text-decoration-none"><Button variant="contained" color="secondary" className="mx-3">Read all Records</Button></Link>
        </div>
      </div>
      <Route path="/create" component={CreateForm} exact/>
      <Route path="/read" component={ReadData} exact/>
      <Route path="/update" component={Update} exact/>
    </Router>
  )
}

export default App;
