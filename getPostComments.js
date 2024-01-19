// Get comments for post id 1
get('commentsForPost1');

// Extract name and email from comments
fn(state => {
  const comments = state.data;

  // Extract name and email from each comment
  const extractedData = comments.map(comment => ({
    name: comment.name,
    email: comment.email
  }));

  return { ...state, extractedData };
});

// Log the extracted data from comments
fn(state => {
  const { extractedData } = state;
  console.log('Extracted data from comments:', extractedData);
  return state;
});
