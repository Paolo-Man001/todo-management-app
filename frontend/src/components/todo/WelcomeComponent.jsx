import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class WelcomeComponent extends Component {
   render() {
      // 'this.props.match.params.name' is used to get the Path Parameter Value('username' from login)
      //    to display the name. Parameter is part of the Props.
      let username = AuthenticationService.getLoggedInUserName();
      return (
          <div>
             <h1>Welcome, { username }.</h1><br/>
             You can manage your Todos <Link to={ "/todos" }>here</Link>.
          </div>
      );
   }
}


export default WelcomeComponent
