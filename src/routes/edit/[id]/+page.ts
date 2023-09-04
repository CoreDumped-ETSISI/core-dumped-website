import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { card } from '../../(main)/+page';


export const load: PageLoad = async ({ fetch, params }) => {
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch('http://localhost:3000/cartas/' + params.id);
    if (response.ok) {
        let data: card = await response.json();
        const eventRes = await fetch('http://localhost:3000/eventos/categorias');
        const projectRes = await fetch('http://localhost:3000/proyectos/categorias');
        let events: Array<string> = await eventRes.json();
        let projects: Array<string> = await projectRes.json();

        return { events, projects, data };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }

};
