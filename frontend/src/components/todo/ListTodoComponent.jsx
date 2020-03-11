import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodoComponent extends Component {
   constructor( props ) {
      // console.log('CALL: constructor()');
      super(props);
      this.state = {

         todos:
             [
                // { id: 1, description: 'Learn to be an expert of React', done: false, targetDate: new Date() },
                // { id: 2, description: 'Climb Everest', done: false, targetDate: new Date() },
                // { id: 3, description: 'Ski in Switzerland', done: false, targetDate: new Date() },
                // { id: 4, description: 'Swim with the Great White Shark', done: false, targetDate: new Date() },
                // { id: 5, description: 'Clean my room', done: false, targetDate: new Date() }
             ]
      }
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
      // console.log('CALL: componentDidMount()');
      let username = AuthenticationService.getLoggedInUserName();
      // TodoDataService.retrieveAllTodos('User One')
      TodoDataService.retrieveAllTodos(username)
          .then(res => {
             console.log(res.data);
             this.setState({
                todos: res.data
             })
          });
   } // END componentDidMount()


   render() {
      // console.log('CALL: render()');
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
   } // render()
} // END Class: ListTodoComponent


export default ListTodoComponent
