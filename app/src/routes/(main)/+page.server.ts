import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";

export interface Card {
    title: string;
    description: string;
    type: string;
    date: string;
    url: string;
    _id: string;
    image: string;
    category: string;
    status: string;
    clickable_link: string;
    clickable_link_text: string;
}

export const load: PageServerLoad = async ({ fetch, params }) => {
    const cards = await fetch(API_URI + '/cartas');
    let data: Array<Card> = await cards.json();
    data = data.slice(0, 20);
    return { data };
};