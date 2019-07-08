import React, {Component} from 'react'

class Login extends Component {
	render() {  
	  return (
	    <div>
	      <form>
	        <div>
	          <label htmlFor="username">Username:</label><br />
	          <input type="text" name="username" placeholder="Username" />
	        </div>
	        <div>
	          <label htmlFor="password">Password:</label><br />
	          <input type="password" name="password" placeholder="Password" />
	        </div>
	        <input type="submit" value="Login" />
	      </form>
	    </div>
	  );
	};
};

export default Login