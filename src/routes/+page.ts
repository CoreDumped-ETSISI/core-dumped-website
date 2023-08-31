import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const events = await fetch('http://localhost:3000/eventos');
    const data = await events.json();
    return { data };
};