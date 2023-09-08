// @ts-nocheck
import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";

import type { person } from '../../(main)/about/+page.server'

export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
    const response = await fetch(API_URI + '/personas');
    let data: Array<person> = await response.json();
    return { data };
};