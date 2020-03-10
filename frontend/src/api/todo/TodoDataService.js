import axios from "axios";

class TodoDataService {

   retrieveAllTodos( username ) {
      // console.log('Executed HelloWorldService!');
      return axios.get(`http://localhost:8081/users/${ username }/todos`);
   }
}


export default new TodoDataService()
