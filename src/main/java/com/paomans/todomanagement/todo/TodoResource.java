package com.paomans.todomanagement.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

   // Will tell Spring to wire the Service/Component Class
   // into this Instance/Object as a @Service (todoService).
   @Autowired
   private TodoHardcodedService todoService;

   // GET: All todos
   @GetMapping("/users/{username}/todos")
   public List<Todo> getAllTodos(@PathVariable String username) {
      return todoService.findAll();
   }


}
