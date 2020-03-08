import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingComponent extends Component {
   render() {
      return (
          <div className="jumbotron main-banner">
             <h1 className="display-4">Manage Todos your way...</h1>
             <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
             <hr className="my-4"/>
             <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
             <Link className="btn btn-primary btn-lg" to="#" role="button">Learn more</Link>
          </div>
      );
   }
}  // END Component-Child: LandingComponent


export default LandingComponent
