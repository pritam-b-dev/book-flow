import books from "@/data/books.json";

export async function getAllBooks() {
  return { data: books };
}

export async function getCategories() {
  const cats = books.map((b) => b.category);
  const categories = [...new Set(cats)];
  return { data: categories };
}

export async function getBookById(id) {
  const book = books.find((b) => b.id === id);
  return { data: book };
}

export async function getFeaturedBooks() {
  return books.slice(0, 4);
}
