const load = async ({ fetch }) => {
  const response = await fetch("http://localhost:3000/personas");
  let people = await response.json();
  return { people };
};
export {
  load
};
