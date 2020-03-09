import React, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService";
import AuthenticationService from "./AuthenticationService";

class LandingComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         helloMessage: ''
      };

      this.getWelcomeMessage = this.getWelcomeMessage.bind(this);
      this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
   }

   render() {
      return (
          <div className="jumbotron main-banner">
             <h1 className="display-4">Manage Todos your way...</h1>
             <p className="lead display-2">{ this.state.helloMessage }</p>
             <hr className="my-4"/>
             <div>
                <button className="btn btn-primary btn-lg"
                        onClick={ this.getWelcomeMessage }>Click for 'Hello'
                </button>
             </div>
          </div>
      );
   }

   getWelcomeMessage() {
      // console.log('Welcome!');
      // HelloWorldService.executeHelloWorldService()
      //     .then(res => this.handleSuccessResponse(res));

      // HelloWorldService.executeHelloWorldBeanService()
      //     .then(res => this.handleSuccessResponse(res));

      HelloWorldService.executeHelloWorldPathVariableService(AuthenticationService.authUser)
          .then(res => this.handleSuccessResponse(res));
   }

   handleSuccessResponse( res ) {
      // this.setState({ helloMessage: res.data })
      console.log(res.data);
      this.setState({ helloMessage: res.data.message })
   }
}  // END Component-Child: LandingComponent


export default LandingComponent
