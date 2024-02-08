"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { BiEdit } from "react-icons/bi";
import Form from "../ui/Form";
import { edit } from "@/app/actions/todoActions";

const TodoEdit = ({ todo }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" value={todo.title} placeholder="Edit Todo..." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default TodoEdit;
