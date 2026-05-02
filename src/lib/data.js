const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/categories`);
  const data = await res.json();
  return data;
}

export async function getAllBooks() {
  const res = await fetch(`${BASE_URL}/api/books`);
  const data = await res.json();
  return data;
}

export async function getBookById(id) {
  const res = await fetch(`${BASE_URL}/api/books/${id}`);
  const data = await res.json();
  return data;
}

export async function getFeaturedBooks() {
  const res = await fetch(`${BASE_URL}/api/books`);
  const data = await res.json();
  return data.data.slice(0, 4);
}
