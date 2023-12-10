export async function getPost(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const res = await fetch(url);
  const posts = await res.json();

  return posts;
}

export async function getUserPost(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

  const res = await fetch(url);
  const posts = await res.json();

  return posts;
}
