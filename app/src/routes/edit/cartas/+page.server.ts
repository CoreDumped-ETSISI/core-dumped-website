import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";
import type { Card } from "../../(main)/+page.server"

export const load: PageServerLoad = async ({ fetch, params }) => {
    const allCardComponents = await fetch(API_URI + '/cartas');
    const cat1 = await fetch(API_URI + '/proyectos/categorias')
    const cat2 = await fetch(API_URI + '/eventos/categorias')
    let cards: Array<Card> = await allCardComponents.json();
    let projectCategories: Array<string> = await cat1.json();
    let eventCategories: Array<string> = await cat2.json();
    return { cards, projectCategories, eventCategories };
};