import axios from "axios";

class TodoDataService {
   // Get ALL Todos
   retrieveAllTodos( username ) {
      // console.log('Executed HelloWorldService!');
      return axios.get(`http://localhost:8081/users/${ username }/todos`);
   }

   // Get ONE Todos
   retrieveTodo( username, id ) {
      // console.log('Executed HelloWorldService!');
      return axios.get(`http://localhost:8081/users/${ username }/todos/${ id }`);
   }

   // Delete by Id:
   deleteTodoById( username, id ) {
      // console.log('Executed HelloWorldService!');
      return axios.delete(`http://localhost:8081/users/${ username }/todos/${ id }`);
   }

   // Update by Id:
   updateTodo( username, id, todo ) {
      // console.log('Executed HelloWorldService!');
      return axios.put(`http://localhost:8081/users/${ username }/todos/${ id }`, todo);
   }

   // Create/Add new Entry :
   createTodo( username, todo ) {
      // console.log('Executed HelloWorldService!');
      return axios.post(`http://localhost:8081/users/${ username }/todos/`, todo);
   }
}


export default new TodoDataService()
