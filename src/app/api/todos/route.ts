import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "./todo-model";
import { nanoid } from "nanoid";
import { client } from "../../../../libs/pg-client";

export const GET = async (req: NextRequest) => {
  const todos = await client.query("select * from todos");
  return NextResponse.json(todos.rows);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const task = body.task;
  const newTodo = {
    id: nanoid(),
    task,
  };
  await client.query("insert into todos (id, task) values ($1, $2)", [
    newTodo.id,
    newTodo.task,
  ]);
  return NextResponse.json(newTodo);
};
