const load = async ({ fetch, params }) => {
  const eventRes = await fetch("http://localhost:3000/eventos/categorias");
  const projectRes = await fetch("http://localhost:3000/proyectos/categorias");
  let events = await eventRes.json();
  let projects = await projectRes.json();
  return { events, projects };
};
export {
  load
};
