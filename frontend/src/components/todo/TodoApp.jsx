import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import LandingComponent from "./LandingComponent";
import HeaderWithRouter from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
   render() {
      return (
          <Router>
             <HeaderWithRouter/>
             <main role="main" className="container todo-feature">
                <Switch>
                   {/*<Route path="/" exact component={ LoginComponent }/>*/}
                   <Route path="/" exact component={ LandingComponent }/>
                   <Route path="/login" component={ LoginComponent }/>
                   <AuthenticatedRoute path="/welcome/:name" component={ WelcomeComponent }/>
                   <AuthenticatedRoute path="/todos/:id" component={ TodoComponent }/>
                   <AuthenticatedRoute path="/todos" component={ ListTodoComponent }/>
                   <AuthenticatedRoute path="/logout" component={ LogoutComponent }/>
                   <Route component={ ErrorComponent }/>
                </Switch>
             </main>
             <FooterComponent/>
          </Router>
      );
   }
}  // END Component-Parent: TodoApp


export default TodoApp
