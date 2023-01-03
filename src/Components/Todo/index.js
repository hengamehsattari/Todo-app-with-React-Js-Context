import { FiEdit2 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { useTodos } from "../../Context";

import React from "react";

const Todo = ({ todo }) => {
  const { deleteTodo, findItem } = useTodos();
  return (
    <div className="tasks">
      <div className="task">
        <p>{todo.task}</p>
      </div>
      
      <div className="trashedit">
        <button className ="trash" onClick={() => deleteTodo(todo.id)}>
          <FaTrashAlt />
        </button>
        <button className ="edit"onClick={() => findItem(todo.id)}>
          <FiEdit2 />
        </button>
      </div>

    </div>
  );
};

export default Todo;

