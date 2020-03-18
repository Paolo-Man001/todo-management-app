package com.paomans.todomanagement.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

   // GET: ONE entry
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

   // PUT: Update an Entry:
   @PutMapping("/users/{username}/todos/{id}")
   public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                          @PathVariable long id,
                                          @RequestBody Todo todo) { // Gets the update thru the req. body
      Todo todoUpdated = todoService.save(todo);
      return new ResponseEntity<Todo>(todo, HttpStatus.OK);
   }


   // POST: Create a new Entry:

}
