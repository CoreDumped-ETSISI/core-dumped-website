const load = async ({ fetch, params }) => {
  const cards = await fetch("http://localhost:3000/proyectos");
  const fetchCategories = await fetch("http://localhost:3000/proyectos/categorias");
  let projects = await cards.json();
  let categories = await fetchCategories.json();
  return { projects, categories };
};
export {
  load
};
