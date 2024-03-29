"use client";

import { deleteTodo } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";

const TodoDelete = ({ todo }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<BsFillTrashFill />} type='submit' />
    </Form>
  );
};

export default TodoDelete;
