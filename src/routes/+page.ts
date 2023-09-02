import type { PageLoad } from './$types';

interface Card {
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
    let data: Array<Card> = await cards.json();
    console.log(data);
    return { data };
};