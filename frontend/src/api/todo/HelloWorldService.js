import axios from "axios";

class HelloWorldService {

   executeHelloWorldService() {
      // console.log('Executed HelloWorldService!');
      return axios.get('http://localhost:8081/hello-world');
   }

   executeHelloWorldBeanService() {
      // console.log('Executed HelloWorldService!');
      return axios.get('http://localhost:8081/hello-world-bean');
   }
}


export default new HelloWorldService() // Make sure to export an Instance of this Class.
