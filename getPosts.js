// Get all posts
get('posts');

fn(state => {
  const posts = state.data;
  return state;
});