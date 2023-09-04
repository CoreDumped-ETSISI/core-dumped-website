import type { PageLoad } from './$types';

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

export const load: PageLoad = async ({ fetch, params }) => {
    const response = await fetch('http://localhost:3000/personas');
    let people: Array<person> = await response.json();
    return { people };
};