import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';


import type { card } from "../+page"

export const load: PageLoad = async ({ fetch, params }) => {
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch('http://localhost:3000/cartas/' + params.id);
    console.log(response)
    if (response.ok) {
        let data: card = await response.json();
        return { data };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }

};
