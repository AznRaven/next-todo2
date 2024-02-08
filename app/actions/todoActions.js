"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formData) {
  const input = formData.get("input");

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function completed(formData) {
  const inputId = formData.get("inputId");
  if (!inputId) {
    // Handle the case where inputId is null or undefined.
    // You might want to log an error or return early.
    return;
  }
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) {
    return;
  }
  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });
  revalidatePath("/");

  return updatedStatus;
}

export async function edit(formData) {
  const input = formData.get("newTitle");
  const inputId = formData.get("inputId");

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });
  revalidatePath("/");
}

export async function deleteTodo(formData) {
  const inputId = formData.get("inputId");

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath('/')
}
