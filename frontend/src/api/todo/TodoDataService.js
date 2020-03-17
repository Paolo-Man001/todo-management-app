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
   deleteTodoById( id, username ) {
      // console.log('Executed HelloWorldService!');
      return axios.delete(`http://localhost:8081/users/${ username }/todos/${ id }`);
   }
}


export default new

TodoDataService()
