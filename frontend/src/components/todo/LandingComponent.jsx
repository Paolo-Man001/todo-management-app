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

   componentDidMount() {
      this.getWelcomeMessage();
   }

   render() {

      return (
          <div className="jumbotron main-banner">
             <h1 className="display-4">Manage Todos your way...</h1>
             <p className="lead display-2">{ this.state.helloMessage }</p>
             <hr className="my-4"/>
             <div>

                { this.state.errorMessage && <div className="alert alert-danger" role="alert">{ this.state.errorMessage }</div> }
                {/*<button className="btn btn-primary btn-lg"*/ }
                {/*        onClick={ this.getWelcomeMessage }>Click for 'Hello'*/ }
                {/*</button>*/ }
             </div>
          </div>
      );
   }

   getWelcomeMessage() {
      let username = AuthenticationService.getLoggedInUserName();

      if ( username ) {
         HelloWorldService.executeHelloWorldPathVariableService(username)
             .then(res => this.handleSuccessResponse(res))
             .catch(error => this.handleError(error));
      } else {
         this.setState({ helloMessage: 'Hello there!' });
      }
   }

   handleSuccessResponse( res ) {
      // this.setState({ helloMessage: res.data })
      // console.log(res.data);
      if ( AuthenticationService.isUserLoggedIn() ) {
         this.setState({ helloMessage: res.data.message })
      }
   }

   handleError( error ) {
      console.log(error.response);
      let errorMessage = '';
      if ( error.message ) {
         errorMessage += error.message;
      }
      if ( error.response && error.response.data ) {
         errorMessage += error.response.data.message;
      }
      this.setState({ errorMessage: errorMessage });
   }
}  // END Component-Child: LandingComponent


export default LandingComponent
