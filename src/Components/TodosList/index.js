import Todo from "../Todo";
import { useTodos } from "../../Context";
import React from "react";

const TodosList = () => {
  const { todos } = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
