import { completed } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";


const TodoCompleted = ({ todo }) => {
  return (
    <Form action={completed}>
      <Input name="inputId" value={todo.id} className="border-gray-700" type="hidden" />

      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default TodoCompleted;
