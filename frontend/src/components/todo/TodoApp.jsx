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
      // this.handlePasswordChange = this.handlePasswordChange.bind(this);

      this.handleChange = this.handleChange.bind(this);
   }

   render() {
      return (
          <div>
             User Name: <input value={ this.state.username } type="text" name="username" onChange={ this.handleChange }/>
             Password: <input value={ this.state.password } type="password" name="password" onChange={ this.handleChange }/>
             <button>Login</button>
          </div>
      );
   }

   handleChange( event ) {
      console.log(this.state);
      this.setState({
         // 'event.target.name' refers to the attribute 'name' that is assigned to "username / password"
         // [event.target.name] MUST be in a bracket, to make it an object-member-variable(key)
         [event.target.name]: event.target.value
      })
   }

}


export default TodoApp
