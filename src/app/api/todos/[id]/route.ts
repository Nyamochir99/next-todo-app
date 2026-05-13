import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "../todo-model";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const { id } = await params;
  const deletingItem = await TodoModel.findById(id);

  if (!deletingItem) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  await TodoModel.deleteOne({ _id: id });
  return NextResponse.json(deletingItem);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const { id } = await params;
  const body = await req.json();
  const task = body.task;
  const checked = body.checked;
  const updatedTodo = await TodoModel.findById(id);
  if (!updatedTodo) {
    return NextResponse.json({ message: "Todo not found " }, { status: 404 });
  }
  if (task === undefined && checked === undefined) {
    return NextResponse.json(
      { message: "Body must have atleast task or checked" },
      { status: 400 },
    );
  }
  const editedTask = {
    ...updatedTodo.toJSON(),
    ...(task && { task }),
    ...(checked !== undefined && { checked }),
  };
  await TodoModel.updateOne({ _id: id }, editedTask);
  return NextResponse.json(editedTask);
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  await mongoose.connect(process.env.DATABASE_URL || "");
  const todo = await TodoModel.findById(id);
  return NextResponse.json(todo);
};
