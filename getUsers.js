get('https://jsonplaceholder.typicode.com/users');
fn(state => {
  console.log(state.data[0]);
  return state;
});