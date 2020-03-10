import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodoComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {

         todos:
             [
                // { id: 1, description: 'Learn to be an expert of React', done: false, targetdate: new Date() },
                // { id: 2, description: 'Climb Everest', done: false, targetdate: new Date() },
                // { id: 3, description: 'Ski in Switzerland', done: false, targetdate: new Date() },
                // { id: 4, description: 'Swim with the Great White Shark', done: false, targetdate: new Date() },
                // { id: 5, description: 'Clean my room', done: false, targetdate: new Date() }
             ]
      }
   }

   componentDidMount() {

      let username = AuthenticationService.getLoggedInUserName();

      // TodoDataService.retrieveAllTodos('User One')
      TodoDataService.retrieveAllTodos(username)
          .then(res => {
             console.log(res.data);
             this.setState({
                todos: res.data
             })
          });

   }

   render() {

      return (
          <div>
             <h1 className="mb-3">List of Todos</h1>
             <table className="table table-bordered">
                <thead className="thead-dark">
                   <tr>
                      <th>description</th>
                      <th>Target Date</th>
                      <th>Complete</th>
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
                          </tr>
                      )
                   }
                </tbody>
             </table>
          </div>
      );
   }
}


export default ListTodoComponent
