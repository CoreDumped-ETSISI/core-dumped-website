// @ts-nocheck
import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";

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

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
    const cards = await fetch(API_URI + '/cartas');
    console.log(cards.headers);
    let data: Array<card> = await cards.json();
    return { data };
};