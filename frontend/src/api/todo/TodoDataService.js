import axios from "axios";

class TodoDataService {

   // Get all Todos
   retrieveAllTodos( username ) {
      // console.log('Executed HelloWorldService!');
      return axios.get(`http://localhost:8081/users/${ username }/todos`);
   }

   // Delete by Id:
   deleteTodoById( id, username ) {
      // console.log('Executed HelloWorldService!');
      return axios.delete(`http://localhost:8081/users/${ username }/todos/${ id }`);
   }
}


export default new TodoDataService()
