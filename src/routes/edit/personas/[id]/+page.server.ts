import { fail, json } from '@sveltejs/kit';
import type { Actions } from './$types';

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


        const response = await fetch("http://localhost:3000/personas/" + data.get("id") as string, {
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