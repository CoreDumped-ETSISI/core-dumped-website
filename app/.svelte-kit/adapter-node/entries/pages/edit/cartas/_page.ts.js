const load = async ({ fetch, params }) => {
  const allCardComponents = await fetch("http://localhost:3000/cartas");
  const cat1 = await fetch("http://localhost:3000/proyectos/categorias");
  const cat2 = await fetch("http://localhost:3000/eventos/categorias");
  let cards = await allCardComponents.json();
  let projectCategories = await cat1.json();
  let eventCategories = await cat2.json();
  return { cards, projectCategories, eventCategories };
};
export {
  load
};
