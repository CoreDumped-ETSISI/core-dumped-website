const load = async ({ fetch, params }) => {
  const cards = await fetch("http://localhost:3000/cartas");
  console.log(cards.headers);
  let data = await cards.json();
  return { data };
};
export {
  load
};
