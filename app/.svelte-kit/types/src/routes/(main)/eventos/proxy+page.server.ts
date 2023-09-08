// @ts-nocheck
import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";

import type { card } from "../+page.server"

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
    const cards = await fetch(API_URI + '/eventos');
    const fetchCategories = await fetch(API_URI + '/eventos/categorias')
    let events: Array<card> = await cards.json();
    let categories: Array<string> = await fetchCategories.json();
    return { events, categories };
};