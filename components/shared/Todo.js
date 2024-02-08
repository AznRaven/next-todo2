import React from "react";
import TodoEdit from "./TodoEdit";
import TodoDelete from "./TodoDelete";
import TodoCompleted from "./TodoCompleted";

const Todo = ({ todo }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div
      className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <TodoCompleted todo={todo} />
      <span className="text-center font-bold uppercase">{todo.title} </span>
      <div className="flex items-center gap-5">
        <TodoEdit todo={todo} />
        <TodoDelete todo={todo}/>
      </div>
    </div>
  );
};

export default Todo;
