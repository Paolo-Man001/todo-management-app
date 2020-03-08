import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Link, withRouter } from "react-router-dom";

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
                   { isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to={ `/welcome/${AuthenticationService.authUser}` }>Home</Link></li> }
                   { isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/todo">Todos</Link></li> }
                </ul>
                <ul className="navbar-nav">
                   { !isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li> }
                   { isUserLoggedIn && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={ AuthenticationService.logout }>Logout</Link></li> }
                </ul>
             </div>
          </nav>
      );
   }
}  // END Component-Child: HeaderComponent
const HeaderWithRouter = withRouter(HeaderComponent); // withRouter() updates Navbar accordingly to AuthenticationService.isUserLoggedIn()


export default HeaderWithRouter
