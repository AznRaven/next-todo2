'use client'
import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import {BiEdit} from 'react-icons/bi'

const TodoEdit = ({todo}) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit =(params) =>{
    
  }

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type='submit' text='Save'/>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default TodoEdit;
