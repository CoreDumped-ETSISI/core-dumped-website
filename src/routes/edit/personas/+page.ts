import type { PageLoad } from './$types';

import type { person } from '../../(main)/about/+page'

export const load: PageLoad = async ({ fetch, params }) => {
    const response = await fetch('http://localhost:3000/personas');
    let data: Array<person> = await response.json();
    return { data };
};