import React, { Component } from "react";

class TodoApp extends Component {
   render() {
      return (
          <div className={ "TodoApp" }>
             <h1>From TodoApp Component!</h1>
             <LoginComponent/>
          </div>
      );
   }
}


//-------LoginComponent-------//

class LoginComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         username: 'user name',
         password: ''
      };
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
   }

   render() {
      return (
          <div>
             User Name: <input value={ this.state.username } type="text" name="username" onChange={ this.handleUsernameChange }/>
             Password: <input value={ this.state.password } type="password" name="password" onChange={ this.handlePasswordChange }/>
             <button>Login</button>
          </div>
      );
   }

   handleUsernameChange( event ) {
      console.log(event.target.value);
      this.setState({
         username: event.target.value
      })
   }

   handlePasswordChange(event) {
      console.log(event.target.value);
      this.setState({
         password: event.target.value
      });
   }
}


export default TodoApp
