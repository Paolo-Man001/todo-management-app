import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, withRouter } from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";

class TodoApp extends Component {
   render() {
      return (
          <div className={ "TodoApp" }>
             <Router>
                <>
                   {/*<HeaderComponent/>*/ }
                   <HeaderWithRouter/>
                   <main role="main" className="container todo-feature flex-shrink-0 ">
                      <Switch>
                         <Route path="/" exact component={ LoginComponent }/>
                         <Route path="/login" component={ LoginComponent }/>
                         <Route path="/welcome/:name" component={ WelcomeComponent }/>
                         <Route path="/todo" component={ ListTodoComponent }/>
                         <Route path="/logout" component={ LogoutComponent }/>
                         <Route component={ ErrorComponent }/>
                      </Switch>
                   </main>
                   <FooterComponent/>
                </>
             </Router>
          </div>
      );
   }
}  // END Component-Parent: TodoApp


//-------HeaderComponent-------//
class HeaderComponent extends Component {
   render() {
      const isUserLoggedIn = AuthenticationService.isUserLoggedIn(); // checks for True or False (if user is logged-in or not)
      // console.log(isUserLoggedIn);

      return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <Link className="navbar-brand" to="/">Todo Mngt App</Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                   { isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/welcome">Home</Link></li> }
                   { isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/todo">Todos</Link></li> }
                </ul>
                <ul className="navbar-nav">
                   { !isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li> }
                   { isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={ AuthenticationService.logout }>Logout</Link></li> }
                </ul>
             </div>
          </nav>
      );
   }
}  // END Component-Child: HeaderComponent
const HeaderWithRouter = withRouter(HeaderComponent); // withRouter() updates Navbar accordingly to AuthenticationService.isUserLoggedIn()


//-------FooterComponent-------//
class FooterComponent extends Component {
   render() {
      return (
          <footer className="footer mt-auto py-3">
             <span className="text-muted">&copy; 2020 Todo Mngt App</span>
          </footer>
      );
   }
}  // END Component-Child: FooterComponent


//-------LogoutComponent-------//
class LogoutComponent extends Component {
   render() {
      return (
          <div className="container">
             <h1>You are Logged Out</h1>
             <p>Thank you, and have a great day!</p>
          </div>
      );
   }
}  // END Component-Child: LogoutComponent


//-------ListTodoComponent-------//
class ListTodoComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         todos:
             [
                { id: 1, description: 'Learn to be an expert of React', done: false, targetdate: new Date() },
                { id: 2, description: 'Climb Everest', done: false, targetdate: new Date() },
                { id: 3, description: 'Ski in Switzerland', done: false, targetdate: new Date() },
                { id: 4, description: 'Swim with the Great White Shark', done: false, targetdate: new Date() },
                { id: 5, description: 'Clean my room', done: false, targetdate: new Date() }
             ]
      }
   }

   render() {

      return (
          <div>
             <h1 className="mb-3">List of Todos</h1>
             <table className="table table-bordered">
                <thead className="thead-dark">
                   <tr>
                      <th>description</th>
                      <th>Target Date</th>
                      <th>Complete</th>
                   </tr>
                </thead>
                <tbody>
                   {
                      this.state.todos.map
                      (todo =>
                          <tr key={ `10${ todo.id }` }>
                             <td>{ todo.description }</td>
                             <td>{ todo.targetdate.toDateString() }</td>
                             <td>{ todo.done.toString() }</td>
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
      return (
          <div>
             <h1>Welcome, { this.props.match.params.name }.</h1><br/>
             You can manage your Todos <Link to={ "/todo" }>here</Link>.
          </div>
      );
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
         username: '',
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
             {/*<ShowInvalidCredentials isLoginFail={ this.state.isLoginFail }/>*/ }
             {/*{ this.state.showSuccessMessage && <h3>Login Successful!!!</h3> }*/ }

             <form className="form-signin">
                { this.state.isLoginFail && <div className="alert alert-warning">Invalid Credentials</div> }
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="text" name="username" onChange={ this.handleChange } className="form-control" placeholder="User name" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" onChange={ this.handleChange } className="form-control" placeholder="Password" required/>


                {/*User Name: <input value={ this.state.username } type="text" name="username" onChange={ this.handleChange }/>*/ }
                {/*Password: <input value={ this.state.password } type="password" name="password" onChange={ this.handleChange }/>*/ }
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
      // DEFAULT HARDCODED AUTH = username: "john doe" , password: "password"
      // this.setState({ showSuccessMessage: true });

      if ( this.state.username === "john doe" && this.state.password === "password" ) {
         // Authentication service:
         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);

         // username has to be added for the <Route> Path Param (path="/welcome/:name")
         this.props.history.push(`/welcome/${ this.state.username }`);

         // this.setState({ isLoginFail: false });
      } else {
         this.setState({ isLoginFail: true });
         this.setState({ showSuccessMessage: false });
      }
   } // END Method: loginClick()
}// END Component-Child:  loginComponent


export default TodoApp
