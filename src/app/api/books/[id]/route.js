import books from "@/data/books.json";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const book = books.find((b) => b.id === id);

  return NextResponse.json({ data: book });
}
