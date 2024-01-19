// Get all posts
get('posts');

// Filter posts by userId
fn(state => {
  const userIdToFilter = 1;
  const filteredPosts = state.data.filter(post => post.userId === userIdToFilter);
  return { ...state, filteredPosts };
});

// Log filtered posts
fn(state => {
  const { filteredPosts } = state;
  console.log(`Posts for user id 1:`, filteredPosts);
  return state;
});
