// @ts-nocheck
import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";

export interface person {
    _id: string,
    name: string,
    appointment: string,
    image: string,
    email: string,
    discord: string,
    github: string,
    telegram: string,
    instagram: string,
    linkedin: string,
}

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
    const response = await fetch(API_URI + '/personas');
    console.log(response);
    let people: Array<person> = await response.json();
    return { people };
};