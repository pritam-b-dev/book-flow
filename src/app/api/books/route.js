import books from "@/data/books.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ data: books });
}
