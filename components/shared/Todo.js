import React from "react";
import TodoEdit from "./TodoEdit";
import TodoDelete from "./TodoDelete";
import TodoCompleted from "./TodoCompleted";

const Todo = ({ todo }) => {
  return (
    <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl">
      <TodoCompleted todo={todo} />
      <span className="text-center font-bold uppercase">{todo.title} </span>
      <div className="flex items-center">
        <TodoEdit todo={todo} />
        <TodoDelete />
      </div>
    </div>
  );
};

export default Todo;
