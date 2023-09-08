// @ts-nocheck
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { API_URI } from "$env/static/private";


import type { card } from "../+page.server"

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch(API_URI + '/cartas/' + params.id);
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
