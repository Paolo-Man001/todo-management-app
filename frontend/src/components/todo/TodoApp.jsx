import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {
   render() {
      return (
          <div className={ "TodoApp" }>
             <Router>
                <Switch>
                   <Route path="/" exact component={ LoginComponent }/>
                   <Route path="/login" component={ LoginComponent }/>
                   <Route path="/welcome" component={ WelcomeComponent }/>
                   <Route component={ ErrorComponent }/>
                </Switch>
             </Router>
          </div>
      );
   }
}  // END Component-Parent: TodoApp


//-------WelcomeComponent-------//
class WelcomeComponent extends Component {
   render() {
      return <h1>Welcome!</h1>
   }
}  // END Component-Child: WelcomeComponent


//-------ErrorComponent-------//
function ErrorComponent() {
   return <h3>An Error Occurred. I don't know what to do. Don't be angry.</h3>;
}  // END Component-Child: ErrorComponent


//-------LoginComponent-------//
class LoginComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         username: 'user name',
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
             {/*<ShowInvalidCredentials isLoginFail={ this.state.isLoginFail }/>*/ }
             { this.state.isLoginFail && <h3>Invalid Credentials</h3> }
             { this.state.showSuccessMessage && <h3>Login Successful!!!</h3> }

             User Name: <input value={ this.state.username } type="text" name="username" onChange={ this.handleChange }/>
             Password: <input value={ this.state.password } type="password" name="password" onChange={ this.handleChange }/>
             <button onClick={ this.loginClick }>Login</button>
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
      // DEFAULT HARDCODED AUTH = username: "john doe" , password: "password"
      // this.setState({ showSuccessMessage: true });
      this.props.history.push("/welcome");
      if ( this.state.username === "john doe" && this.state.password === "password" ) {
         // this.setState({ isLoginFail: false });
      } else {
         this.setState({ isLoginFail: true });
         this.setState({ showSuccessMessage: false });
      }
   } // END Method: loginClick()
}// END Component-Child:  loginComponent


//-------ShowInvalidCredentials-------//
// function ShowInvalidCredentials( props ) {
//    if ( props.isLoginFail ) {
//       return <h3>Invalid Credentials</h3>;
//    }
//    return <></>;
// }


//-------ShowIValidCredentials-------//
// function ShowIValidCredentials( props ) {
//    if ( props.showSuccessMessage ) {
//       return <h3>Login Successful!!!</h3>;
//    }
//    return <></>;
// }

export default TodoApp
