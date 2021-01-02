import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
