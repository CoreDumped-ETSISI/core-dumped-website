const load = async ({ fetch, params }) => {
  const response = await fetch("http://localhost:3000/personas");
  let data = await response.json();
  return { data };
};
export {
  load
};
