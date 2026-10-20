// Write your code here!
// Display posts
function displayPosts(posts) {
  const postList = document.querySelector('#post-list');

  posts.forEach((post) => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.append(h1, p);
    postList.append(li);
  });
}

// Fetch posts, refactored with async/await
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

fetchPosts();
