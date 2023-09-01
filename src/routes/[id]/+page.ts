import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';


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
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch('http://localhost:3000/cartas/' + params.id);
    console.log(response)
    if (response.ok) {
        let data: Card = await response.json();
        return { data };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }

};
