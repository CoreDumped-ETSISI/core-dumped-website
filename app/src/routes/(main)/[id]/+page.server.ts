import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { API_URI } from "$env/static/private";


import type { Card } from "../+page.server"

export const load: PageServerLoad = async ({ fetch, params }) => {
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch(API_URI + '/cartas/' + params.id);
    if (response.ok) {
        let data: Card = await response.json();
        return { data };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }

};
