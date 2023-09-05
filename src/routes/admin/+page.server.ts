import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const password = data.get("password") as string;
        const response = await fetch("http://localhost:3000/login", {
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
            secure: false, //TODO set to true when SSL certificates are added
            sameSite: 'strict',
            maxAge: 60 * 60 * 2 // 2h
        });
        return { success: "Auth successful" }
    },
} satisfies Actions;