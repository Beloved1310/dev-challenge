// Get all covid results
get('results');
fn(state => {
  const covidResults = state.data;
  return state;
});