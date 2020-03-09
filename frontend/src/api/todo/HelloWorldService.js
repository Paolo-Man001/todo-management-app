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

   ///hello-world/path-variable/{name}
   executeHelloWorldPathVariableService(name) {
      // console.log('Executed HelloWorldService!');
      return axios.get(`http://localhost:8081/hello-world/path-variable/${name}`);   // !!Template string must be used.
   }
}


export default new HelloWorldService() // Make sure to export an Instance of this Class.
