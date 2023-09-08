import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";

import type { Card } from "../+page.server"

export const load: PageServerLoad = async ({ fetch, params }) => {
    const cards = await fetch(API_URI + '/proyectos');
    const fetchCategories = await fetch(API_URI + '/proyectos/categorias')
    let projects: Array<Card> = await cards.json();
    let categories: Array<string> = await fetchCategories.json();
    return { projects, categories };
};