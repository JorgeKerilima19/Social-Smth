export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const res = await fetch(url);
  const users = await res.json();

  return users;
}
