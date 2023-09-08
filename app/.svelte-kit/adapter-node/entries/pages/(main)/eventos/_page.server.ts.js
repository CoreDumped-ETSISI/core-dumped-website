const load = async ({ fetch, params }) => {
  const cards = await fetch("http://localhost:3000/eventos");
  const fetchCategories = await fetch("http://localhost:3000/eventos/categorias");
  let events = await cards.json();
  let categories = await fetchCategories.json();
  return { events, categories };
};
export {
  load
};
