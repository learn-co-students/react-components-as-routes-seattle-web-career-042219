import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './Home.js'
import About from './About.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Messages from './Messages.js'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/" exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
  </div>;

ReactDOM.render((
  <Router>
  	<React.Fragment>
  		<Navbar />
	    <Route path="/" component={Home} />
	    <Route exact path="/about" component={About} />
	    <Route exact path="/login" component={Login} />
	    <Route exact path="/signup" component={Signup} />
	    <Route exact path="/messages" component={Messages} />
	</React.Fragment>
  </Router>),
  document.getElementById('root')
);
