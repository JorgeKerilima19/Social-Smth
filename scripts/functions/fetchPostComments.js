export async function getComments(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  const res = await fetch(url);
  const users = await res.json();

  return users;
}
