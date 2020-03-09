import React, { Component } from "react";

class LandingComponent extends Component {
   constructor( props ) {
      super(props);
      this.getWelcomeMessage = this.getWelcomeMessage.bind(this);
   }

   render() {
      return (
          <div className="jumbotron main-banner">
             <h1 className="display-4">Manage Todos your way...</h1>
             <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
             <hr className="my-4"/>
             <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
             <div>

                <button className="btn btn-primary btn-lg"
                        onClick={ this.getWelcomeMessage }>Click for 'Hello'
                </button>
             </div>
          </div>
      );
   }

   getWelcomeMessage() {
      console.log('Welcome!');
   }
}  // END Component-Child: LandingComponent


export default LandingComponent
