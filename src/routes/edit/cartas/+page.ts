import type { PageLoad } from './$types';

import type { card } from "../../(main)/+page"

export const load: PageLoad = async ({ fetch, params }) => {
    const allCards = await fetch('http://localhost:3000/cartas');
    const cat1 = await fetch('http://localhost:3000/proyectos/categorias')
    const cat2 = await fetch('http://localhost:3000/eventos/categorias')
    let cards: Array<card> = await allCards.json();
    let projectCategories: Array<string> = await cat1.json();
    let eventCategories: Array<string> = await cat2.json();
    return { cards, projectCategories, eventCategories };
};