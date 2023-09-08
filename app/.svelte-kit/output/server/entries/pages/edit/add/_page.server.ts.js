import { f as fail } from "../../../../chunks/index.js";
const actions = {
  default: async (event) => {
    const JWT = event.cookies.get("AuthorizationToken");
    const data = await event.request.formData();
    let jsonForm = /* @__PURE__ */ new Map();
    jsonForm.set("type", data.get("type"));
    jsonForm.set("title", data.get("title"));
    jsonForm.set("description", data.get("description"));
    jsonForm.set("status", data.get("status"));
    jsonForm.set("image", data.get("image"));
    if (data.get("date").length > 0) {
      jsonForm.set("date", new Date(data.get("date")).toISOString());
    }
    if (data.get("category") === "new") {
      jsonForm.set("category", data.get("newcategory"));
    } else {
      jsonForm.set("category", data.get("category"));
    }
    const form = Object.fromEntries(jsonForm);
    const response = await fetch("http://localhost:3000/cartas", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        "Authorization": JWT || ""
      }
    });
    if (response.status === 401) {
      return fail(response.status, { error: "Unauthorized" });
    } else if (response.status !== 201) {
      return fail(response.status, { error: response.statusText });
    }
    return { success: "Created" };
  }
};
export {
  actions
};
