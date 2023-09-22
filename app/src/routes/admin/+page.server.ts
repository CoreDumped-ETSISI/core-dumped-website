import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { API_URI } from "$env/static/private";

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const password = data.get("password") as string;
        const response = await fetch(API_URI + "/login", {
            method: 'POST',
            body: JSON.stringify({ password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status != 200) {
            return fail(response.status, { error: "Contraseña incorrecta" })
        }
        const login = await response.json();
        event.cookies.set('AuthorizationToken', `Bearer ${login.token}`, {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 2 // 2h
        });
        return { success: "Auth successful" }
    },
} satisfies Actions;
