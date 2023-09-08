// @ts-nocheck
import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";
import type { card } from "../../(main)/+page.server"

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
    const allCardComponents = await fetch(API_URI + '/cartas');
    const cat1 = await fetch(API_URI + '/proyectos/categorias')
    const cat2 = await fetch(API_URI + '/eventos/categorias')
    let cards: Array<card> = await allCardComponents.json();
    let projectCategories: Array<string> = await cat1.json();
    let eventCategories: Array<string> = await cat2.json();
    return { cards, projectCategories, eventCategories };
};