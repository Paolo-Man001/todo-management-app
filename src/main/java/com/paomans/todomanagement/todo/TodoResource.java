package com.paomans.todomanagement.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

   // GET: ONE todo(s)
   @GetMapping("/users/{username}/todos/{id}")
   public Todo getTodo(@PathVariable String username,
                       @PathVariable long id) {
      return todoService.findById(id);
   }

   // DELETE: /users/{username}/todos/{id}
   @DeleteMapping("/users/{username}/todos/{id}")
   public ResponseEntity<Void> deleteTodo(@PathVariable String username,
                                          @PathVariable long id) {
      Todo todo = todoService.deleteById(id);
      if (todo != null) {
         return ResponseEntity.noContent().build();
      }
      return ResponseEntity.notFound().build();
   }
}
