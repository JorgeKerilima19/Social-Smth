async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const res = await fetch(url);
  const users = await res.json();

  return users;
}

async function getPosts(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const res = await fetch(url);
  const posts = await res.json();

  return posts;
}
export const salute="hi"