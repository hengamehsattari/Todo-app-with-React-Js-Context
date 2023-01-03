import { useTodos } from "../../Context";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";


const TodosForm = () => {
  const { addTodo, editItem, editTodo } = useTodos();
  const [todoInput, setTodoInput] = useState("");

  const clearInput = (e) => {
    e.preventDefault();
    setTodoInput("");
  };

  useEffect(() => {
    if (editItem) setTodoInput(editItem.task);
    else setTodoInput("");
  }, [editItem]);

  const createTodo = (e) => {
    console.log("e");
    e.preventDefault();

    if (editItem) {
      editTodo(todoInput, editItem.id);
    } else {
      const uniqueId = uuidv4();
      const newTodo = { id: uniqueId, task: todoInput };
      addTodo(newTodo);
    }
    setTodoInput("");
  };
  return (
    <>
      <form>
        <h2>Task Manager</h2>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
        <div className="btns">
          <button className="btn" onClick={createTodo}>
            {editItem ? "Edit Task" : "Add Task"}
          </button>
          <button className="btn" onClick={clearInput}>Clear </button>
        </div>
        
      </form>
      
    </>
  );
};

export default TodosForm;
