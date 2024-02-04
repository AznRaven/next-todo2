import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma";
import TodoAdd from "@/components/shared/TodoAdd";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
export default async function Home() {
  const data = await getData();
  return (
    <main>
      <div className="w-screen py-20 flex flex-col justify-center items-center">
        <span className="text-3xl font-extrabold">Todo</span>
        <h1 className="text-3xl font-extrabold uppercase mb-5">
          Next.js 14
          <span className="text-orange-700 ml-2">Server Actions</span>
        </h1>
        <div className="flex justify-center flex-col items-center w-[1000px]">
          {" "}
          <TodoAdd />
          <div className="flex flex-col justify-center items-center gap-5 mt-10 w-full">
            {data.map((todo, id) => (
              <div className="w-full" key={id}>
                <Todo todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
