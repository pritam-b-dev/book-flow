import books from "@/data/books.json";
import { NextResponse } from "next/server";
export function GET() {
  const cats = books.map((b) => b.category);
  const categories = [...new Set(cats)];
  return NextResponse.json({ data: categories });
}
