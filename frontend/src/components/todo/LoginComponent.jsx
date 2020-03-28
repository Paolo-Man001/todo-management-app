import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         username: 'john doe',
         password: '',
         isLoginFail: false,
         showSuccessMessage: false
      };
      // this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.loginClick = this.loginClick.bind(this);
   }  // END Constructor

   render() {
      return (
          <div>
             <h1 className="mb-4">Login</h1>

             <form className="form-signin">
                { this.state.isLoginFail && <div className="alert alert-warning">Invalid Credentials</div> }
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="text" name="username" onChange={ this.handleChange } className="form-control" placeholder="User name" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" onChange={ this.handleChange } className="form-control" placeholder="Password" required/>

                <button className="btn btn-lg btn-primary btn-block mt-3" onClick={ this.loginClick }>Login</button>
             </form>
          </div>
      );
   }

   //---- METHODS:
   handleChange( event ) {
      // console.log(this.state);
      this.setState({
         /* 'event.target.name' refers to the attribute 'name' that is assigned to "username / password"
          [event.target.name] MUST be in a bracket, to make it an object-member-variable(key)*/
         [event.target.name]: event.target.value
      })
   } // END Method: handleChange()

   loginClick() {
      // HARD-CODED validation/authentication :
      if ( this.state.username === "john doe" && this.state.password === "password" ) {
         // Authentication service:
         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
         // username has to be added for the <Route> Path Param (path="/welcome/:name")
         this.props.history.push(`/welcome/${ this.state.username }`);

      } else {
         this.setState({ isLoginFail: true });
         this.setState({ showSuccessMessage: false });
      }
   } // END Method: loginClick()
}// END Component-Child:  loginComponent


export default LoginComponent
