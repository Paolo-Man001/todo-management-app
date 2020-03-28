package com.paomans.todomanagement.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


// @RestController Annotations will tell SpringBoot what this Class's role.
// @CrossOrigin allows programmatically "proxy" 4200 for SpringBoot. Alt-way is set proxy inside React
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
   // GET
   // URI : "/hello-world"
   // method - HelloWorld()
   @GetMapping(path = "/hello-world")
   public String helloWorld() {
      return "Hello World!";
   }

   @GetMapping(path = "/hello-world-bean")
   public HelloWorldBean helloWorldBean() {
      return new HelloWorldBean("Hello World! ...From Bean");
   }

   // Path-variable(../../{name}) is also known as Path-parameter, like in React
   @GetMapping(path = "/hello-world/path-variable/{name}")
   public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//      throw new RuntimeException("Runtime EXCEPTION!");
      return new HelloWorldBean(String.format("Hello, %s!", name));
   }
}
