import { fail, json } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { API_URI } from "$env/static/private";


export const load: PageServerLoad = async ({ fetch, params }) => {
    const eventRes = await fetch(API_URI + '/eventos/categorias');
    const projectRes = await fetch(API_URI + '/proyectos/categorias');
    let events: Array<string> = await eventRes.json();
    let projects: Array<string> = await projectRes.json();
    return { events, projects };
};

export const actions = {
    default: async (event) => {
        const JWT = event.cookies.get("AuthorizationToken");
        const data = await event.request.formData();

        let jsonForm: Map<string, string> = new Map();

        jsonForm.set("type", data.get("type") as string);
        jsonForm.set("title", data.get("title") as string);
        jsonForm.set("description", data.get("description") as string);
        jsonForm.set("status", data.get("status") as string);
        jsonForm.set("image", data.get("image") as string);

        if ((data.get("date") as string).length > 0) {
            jsonForm.set("date", new Date(data.get("date") as string).toISOString());
        }

        if (data.get("category") as string === "new") {
            jsonForm.set("category", data.get("newcategory") as string);
        } else {
            jsonForm.set("category", data.get("category") as string);
        }
        const form = Object.fromEntries(jsonForm);

        const response = await fetch(API_URI + "/cartas", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": JWT || ""
            }
        });
        if (response.status === 401) {
            return fail(response.status, { error: "Unauthorized" })
        }
        else if (response.status !== 201) {
            return fail(response.status, { error: response.statusText })
        }
        return { success: "Created" }
    },
} satisfies Actions;