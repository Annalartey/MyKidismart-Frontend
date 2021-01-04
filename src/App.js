import './App.css';
import FirstHome from './components/FirstHome';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import QuestionsPage from './components/QuestionsPage';
import QuestionsPage1 from './components/QuestionsPage1';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstHome} />
          <Route path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/questionpage" component={QuestionsPage} />
          <Route exact path="/questionpage1" component={QuestionsPage1} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
