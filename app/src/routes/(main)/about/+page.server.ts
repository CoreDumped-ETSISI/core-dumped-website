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

export const load: PageServerLoad = async ({ fetch }) => {
    const response = await fetch(API_URI + '/personas');
    let people: Array<person> = await response.json();
    return { people };
};