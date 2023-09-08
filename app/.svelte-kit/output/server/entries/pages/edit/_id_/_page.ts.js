import { e as error } from "../../../../chunks/index.js";
const load = async ({ fetch, params }) => {
  if (params.id.length != 24) {
    throw error(404, {
      message: "Not found"
    });
  }
  const response = await fetch("http://localhost:3000/cartas/" + params.id);
  if (response.ok) {
    let data = await response.json();
    const eventRes = await fetch("http://localhost:3000/eventos/categorias");
    const projectRes = await fetch("http://localhost:3000/proyectos/categorias");
    let events = await eventRes.json();
    let projects = await projectRes.json();
    return { events, projects, data };
  } else {
    throw error(response.status, {
      message: response.statusText
    });
  }
};
export {
  load
};
