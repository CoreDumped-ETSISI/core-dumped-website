import type { PageLoad } from './$types';


export const load: PageLoad = async ({ fetch, params }) => {
    const eventRes = await fetch('http://localhost:3000/eventos/categorias');
    const projectRes = await fetch('http://localhost:3000/proyectos/categorias');
    let events: Array<string> = await eventRes.json();
    let projects: Array<string> = await projectRes.json();
    return { events, projects };
};