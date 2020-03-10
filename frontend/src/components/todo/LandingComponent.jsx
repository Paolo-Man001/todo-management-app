import React, { Component } from "react";
import HelloWorldService from "../../api/todo/HelloWorldService";
import AuthenticationService from "./AuthenticationService";

class LandingComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         helloMessage: '',
         errorMessage: ''
      };

      this.getWelcomeMessage = this.getWelcomeMessage.bind(this);
      this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
      this.handleError = this.handleError.bind(this);
   }

   render() {
      return (
          <div className="jumbotron main-banner">
             <h1 className="display-4">Manage Todos your way...</h1>
             <p className="lead display-2">{ this.state.helloMessage }</p>
             <hr className="my-4"/>
             <div>

                { this.state.errorMessage && <div className="alert alert-danger" role="alert">{ this.state.errorMessage }</div> }
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
          .then(res => this.handleSuccessResponse(res))
          .catch(error => this.handleError(error));
   }

   handleSuccessResponse( res ) {
      // this.setState({ helloMessage: res.data })
      // console.log(res.data);
      if ( AuthenticationService.isUserLoggedIn() ) {
         this.setState({ helloMessage: res.data.message })
      } else {
         this.setState({ helloMessage: 'Hello there!' })
      }
   }

   handleError( error ) {
      // console.log(error.response.data.message);
      this.setState({ errorMessage: error.response.data.message })
   }
}  // END Component-Child: LandingComponent


export default LandingComponent
