import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    const auth = event.cookies.get("AuthorizationToken");
    if (!auth) {
        throw redirect(303, "/admin")
    }
    return { success: "Success" }
};