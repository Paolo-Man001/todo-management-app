package com.paomans.todomanagement.basic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

   @GetMapping(path = "/basicauth")
   public AuthenticationBean helloWorldBean() {
//      throw new RuntimeException('Sorry an Error has occurred!');
      return new AuthenticationBean("You are now, Authenticated!");
   }
}
