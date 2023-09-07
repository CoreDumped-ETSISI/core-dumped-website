import type { PageLoad } from './$types';

export interface card {
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
    const cards = await fetch('http://localhost:3000/cartas');
    let data: Array<card> = await cards.json();
    return { data };
};