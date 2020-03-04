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
   render() {
      return (
          <div>
             User Name: <input type="text" name="username"/>
             Password: <input type="text" name="password"/>
             <button>Login</button>
          </div>
      );
   }
}


export default TodoApp
