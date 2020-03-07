import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {
   render() {
      return (
          <div className={ "TodoApp" }>
             <Router>
                <>
                   <Switch>
                      <Route path="/" exact component={ LoginComponent }/>
                      <Route path="/login" component={ LoginComponent }/>
                      <Route path="/welcome/:name" component={ WelcomeComponent }/>
                      <Route path="/todo" component={ ListTodoComponent }/>
                      <Route component={ ErrorComponent }/>
                   </Switch>
                </>
             </Router>
          </div>
      );
   }
}  // END Component-Parent: TodoApp


//-------ListTodoComponent-------//
class ListTodoComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         todos:
             [
                { id: 1, description: 'Learn to be an expert of React' },
                { id: 2, description: 'Climb Everest' },
                { id: 3, description: 'Ski in Switzerland' },
                { id: 4, description: 'Swim with the Great White Shark' },
                { id: 5, description: 'Clean my room' }
             ]
      }
   }

   render() {

      return (
          <div>
             <h1>List of Todos</h1>
             <table>
                <thead>
                   <tr>
                      <th>id</th>
                      <th>description</th>
                   </tr>
                </thead>
                <tbody>
                   {
                      this.state.todos.map
                      (
                          todo =>
                              <tr key={ `10${ todo.id }` }>
                                 <td>{ todo.id }</td>
                                 <td>{ todo.description }</td>
                              </tr>
                      )
                   }
                </tbody>
             </table>
          </div>
      );
   }
}  // END Component-Child: ListTodoComponent


//-------WelcomeComponent-------//
class WelcomeComponent extends Component {
   render() {
      // 'this.props.match.params.name' is used to get the Path Parameter Value('username' from login)
      //    to display the name. Parameter is part of the Props.
      return <h1>Welcome, { this.props.match.params.name }!</h1>
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

      if ( this.state.username === "john doe" && this.state.password === "password" ) {

         // username has to be added for the <Route> Path Param (path="/welcome/:name")
         this.props.history.push(`/welcome/${ this.state.username }`);

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
