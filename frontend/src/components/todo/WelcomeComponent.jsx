import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class WelcomeComponent extends Component {
   render() {
      // 'this.props.match.params.name' is used to get the Path Parameter Value('username' from login)
      //    to display the name. Parameter is part of the Props.
      return (
          <div>
             <h1>Welcome, { AuthenticationService.authUser }.</h1><br/>
             You can manage your Todos <Link to={ "/todo" }>here</Link>.
          </div>
      );
   }
}


export default WelcomeComponent
