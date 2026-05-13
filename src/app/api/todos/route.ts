import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "./todo-model";
import { nanoid } from "nanoid";

export const GET = async (req: NextRequest) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const todos = await TodoModel.find();
  return NextResponse.json(todos);
};

export const POST = async (req: NextRequest) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const body = await req.json();
  const task = body.task;
  const newTodo = {
    _id: nanoid(),
    task,
    checked: false,
  };
  await TodoModel.create(newTodo);
  return NextResponse.json(newTodo);
};
