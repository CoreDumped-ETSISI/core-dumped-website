import { r as redirect } from "../../../chunks/index.js";
const load = async (event) => {
  const auth = event.cookies.get("AuthorizationToken");
  if (!auth) {
    throw redirect(303, "/admin");
  }
  return { success: "Success" };
};
export {
  load
};
