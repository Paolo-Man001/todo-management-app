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
      todos.add(new Todo(++idCounter, "john doe", "Learn Angular", new Date(), false));
      todos.add(new Todo(++idCounter, "john doe", "Learn Microservices", new Date(), false));
      todos.add(new Todo(++idCounter, "john doe", "Learn Spanish", new Date(), false));
   }

   public List<Todo> findAll() {
      return todos;
   }
}
