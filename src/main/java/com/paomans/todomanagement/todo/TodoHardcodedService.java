package com.paomans.todomanagement.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
public class TodoHardcodedService {
   private static List<Todo> todos = new ArrayList<>();
   private static int idCounter = 0;

   static {
      todos.add(new Todo(++idCounter, "john doe", "Learn chacha", new Date(), false));
      todos.add(new Todo(++idCounter, "john doe", "Learn Angular 2+", new Date(), false));
      todos.add(new Todo(++idCounter, "john doe", "Learn Microservices", new Date(), false));
      todos.add(new Todo(++idCounter, "john doe", "Learn Spanish", new Date(), false));
   }

   public List<Todo> findAll() {
      return todos;
   }


   //--- Save
   public Todo save(Todo todo) {
      if (todo.getId() == -1) { // means
         todo.setId(++idCounter);
         todos.add(todo);
      } else {
         deleteById(todo.getId());
         todos.add(todo);
      }
      return todo;
   }

   //--- DELETE by ID ---//
   public Todo deleteById(long id) {
      Todo todo = findById(id);              // invokes finById(id)

      if (todo == null) return null;         // Checks if null .... otherwise ...
      if (todos.remove(todo)) return todo;   // if we DID find one by ID and Removed it successfully(then return True) ....
      return null;                           // ...else, return null.
   }

   public Todo findById(long id) {
      for (Todo todo : todos) {
         if (todo.getId() == id) {
            return todo;
         }
      }
      return null;
   }
   //--- End of DELETE by ID ---//
}
