export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const res = await fetch(url);
  const users = await res.json();

  return users;
}
export async function getUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const res = await fetch(url);
  const users = await res.json();

  return users;
}
