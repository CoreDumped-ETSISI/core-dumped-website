import { fail, json, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    update: async (event) => {
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

        const response = await fetch("http://localhost:3000/cartas/" + data.get("id") as string, {
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
    delete: async (event) => {
        const JWT = event.cookies.get("AuthorizationToken");
        const data = await event.request.formData();
        const response = await fetch("http://localhost:3000/cartas/" + data.get("id") as string, {
            method: 'DELETE',
            headers: {
                "Authorization": JWT || ""
            }
        });
        if (response.status === 401) {
            return fail(response.status, { error: "Unauthorized" })
        }
        else if (response.status !== 200) {
            return fail(response.status, { error: response.statusText })
        }
        throw redirect(300, "/edit/cartas");
    }
} satisfies Actions;