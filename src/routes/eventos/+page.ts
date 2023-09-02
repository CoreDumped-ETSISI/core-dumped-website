import type { PageLoad } from './$types';

interface card {
    title: string;
    description: string;
    type: string;
    date: string;
    url: string;
    _id: string;
    image: string;
    category: string;
    status: string;
}

export const load: PageLoad = async ({ fetch, params }) => {
    const cards = await fetch('http://localhost:3000/eventos');
    const fetchCategories = await fetch('http://localhost:3000/eventos/categorias')
    let events: Array<card> = await cards.json();
    let categories: Array<string> = await fetchCategories.json();
    return { events, categories };
};