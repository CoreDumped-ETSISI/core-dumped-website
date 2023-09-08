// @ts-nocheck
import { fail, json } from '@sveltejs/kit';
import type { Actions } from './$types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { person } from '../../../(main)/about/+page.server';
import { API_URI } from "$env/static/private";



export const load = async ({ fetch, params }: Parameters<PageServerLoad>[0]) => {
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch(API_URI + '/personas/' + params.id);
    if (response.ok) {
        let data: person = await response.json();

        return { data };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }

};

export const actions = {
    default: async (event) => {
        const JWT = event.cookies.get("AuthorizationToken");
        const data = await event.request.formData();

        let jsonForm: Map<string, string> = new Map();

        jsonForm.set("name", data.get("name") as string);
        jsonForm.set("appointment", data.get("appointment") as string);

        const image = data.get("image") as string;
        if (image) {
            jsonForm.set("image", image)
        }
        const discord = data.get("discord") as string;
        if (discord) {
            jsonForm.set("discord", discord)
        }
        const email = data.get("email") as string;
        if (email) {
            jsonForm.set("email", email)
        }
        const instagram = data.get("instagram") as string;
        if (instagram) {
            jsonForm.set("instagram", instagram)
        }
        const github = data.get("github") as string;
        if (github) {
            jsonForm.set("github", github)
        }
        const telegram = data.get("telegram") as string;
        if (telegram) {
            jsonForm.set("telegram", telegram)
        }
        const linkedin = data.get("linkedin") as string;
        if (linkedin) {
            jsonForm.set("linkedin", linkedin)
        }
        console.log(jsonForm);
        const form = Object.fromEntries(jsonForm);


        const response = await fetch(API_URI + "/personas/" + data.get("id") as string, {
            method: 'PATCH',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": JWT || ""
            }
        });
        if (response.status === 401) {
            return fail(response.status, { error: "Unauthorized" })
        }
        else if (response.status !== 200) {
            return fail(response.status, { error: response.statusText })
        }

        return { success: "Updated" }
    },
} satisfies Actions;