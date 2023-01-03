import React from "react";
import TodoProvider from "./Context";
import TodosForm from "./Components/TodosForm/index";
import TodosList from "./Components/TodosList/index";

export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodosForm />
        <div className="list"><TodosList /></div>
      </div>

    </TodoProvider>
  );
}
