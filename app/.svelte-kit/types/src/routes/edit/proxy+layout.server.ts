// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
    const auth = event.cookies.get("AuthorizationToken");
    if (!auth) {
        throw redirect(303, "/admin")
    }
    return { success: "Success" }
};