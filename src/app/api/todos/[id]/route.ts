import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "../todo-model";
import { client } from "../../../../../libs/pg-client";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const deletingItem = await client.query("select * from todos where id = $1", [
    id,
  ]);
  if (deletingItem.rowCount === 0) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  await client.query("delete from todos where id = $1", [id]);
  return NextResponse.json(deletingItem.rows);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const body = await req.json();
  const task = body.task;
  const checked = body.checked;
  if (task === undefined && checked === undefined) {
    return NextResponse.json(
      { message: "Body must have atleast task or checked" },
      { status: 400 },
    );
  }
  const updatedTodo = await client.query("select * from todos where id = $1", [
    id,
  ]);
  if (updatedTodo.rowCount === 0) {
    return NextResponse.json({ message: "Todo not found " }, { status: 404 });
  }
  const editedTask = await client.query(
    "update todos set task = COALESCE($2, task) , checked = COALESCE($3, checked) where id = $1 RETURNING *",
    [id, task, checked],
  );
  return NextResponse.json(editedTask.rows);
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const todo = await client.query("select * from todos whree id = $1", [id]);
  return NextResponse.json(todo.rows);
};
