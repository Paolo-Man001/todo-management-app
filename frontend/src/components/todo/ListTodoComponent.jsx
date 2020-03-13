import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodoComponent extends Component {
   constructor( props ) {
      // console.log('CALL: constructor()');
      super(props);
      this.state = {

         todos:
             [],
         message: ''
      };

      this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
      this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
      this.refreshTodos = this.refreshTodos.bind(this);
   }

   //-- React lifecycle methods: --
   // componentWillUnmount() {
   //    console.log('CALL: componentWillUnmount()');
   // } // END: componentWillUnmount()
   // shouldComponentUpdate( nextProps, nextState, nextContext ) {
   //    console.log('CALL: shouldComponentUpdate');
   //    console.log('CALL: shouldComponentUpdate : ' + nextProps);
   //    console.log('CALL: shouldComponentUpdate : ' + nextState);
   //    console.log('CALL: shouldComponentUpdate : ' + nextContext);
   //    return false;
   // }

   componentDidMount() {
      this.refreshTodos();
   } // END componentDidMount()


   refreshTodos() {
      // Return Username:
      let username = AuthenticationService.getLoggedInUserName();

      TodoDataService.retrieveAllTodos(username)
          .then(res => {
             // console.log(res.data);
             this.setState({
                todos: res.data
             })
          });
   } // End of refreshTodos()
   deleteTodoClicked( id ) {
      // get the username from AuthenticationService:
      let username = AuthenticationService.getLoggedInUserName();
      // console.log(id + ":" + username);

      TodoDataService.deleteTodoById(id, username)
          .then(res => {
             this.setState({ message: `You deleted, todo "${ id }"` });
             this.refreshTodos();
          });

   } // End of deleteTodoClicked()


   updateTodoClicked( id ) {
      // get the username from AuthenticationService:
      let username = AuthenticationService.getLoggedInUserName();
      console.log("UPDATING : " + id + " : " + username);

      // Redirect by using URL into Component (TodoComponent.jsx)
      this.props.history.push(`/todos/${ id }`);

      // TodoDataService.deleteTodoById(id, username)
      //     .then(res => {
      //        this.setState({ message: `You deleted, todo "${ id }"` });
      //        this.refreshTodos();
      //     });
   } // End of updateTodoClicked()


   render() {
      // console.log('CALL: render()');
      return (
          <div>
             <h1 className="mb-3">List of Todos</h1>
             { this.state.message && <div className="alert alert-success">{ this.state.message }</div> }
             <table className="table table-bordered">
                <thead className="thead-dark">
                   <tr>
                      <th>description</th>
                      <th>Target Date</th>
                      <th>Complete</th>
                      <th></th>
                      <th></th>
                   </tr>
                </thead>
                <tbody>
                   {
                      this.state.todos.map
                      (todo =>
                          <tr key={ `10${ todo.id }` }>
                             <td>{ todo.description }</td>
                             <td>{ todo.targetDate }</td>
                             <td>{ todo.done.toString() }</td>
                             <td>
                                <button className="btn btn-outline-success" onClick={ () => this.updateTodoClicked(todo.id) }>Update</button>
                             </td>
                             <td>
                                <button className="btn btn-outline-danger" onClick={ () => this.deleteTodoClicked(todo.id) }>Delete</button>
                             </td>
                          </tr>
                      )
                   }
                </tbody>
             </table>
          </div>
      );
   } // render()

} // END Class: ListTodoComponent


export default ListTodoComponent
