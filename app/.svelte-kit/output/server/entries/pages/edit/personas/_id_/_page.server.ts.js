import { f as fail } from "../../../../../chunks/index.js";
const actions = {
  default: async (event) => {
    const JWT = event.cookies.get("AuthorizationToken");
    const data = await event.request.formData();
    let jsonForm = /* @__PURE__ */ new Map();
    jsonForm.set("name", data.get("name"));
    jsonForm.set("appointment", data.get("appointment"));
    const image = data.get("image");
    if (image) {
      jsonForm.set("image", image);
    }
    const discord = data.get("discord");
    if (discord) {
      jsonForm.set("discord", discord);
    }
    const email = data.get("email");
    if (email) {
      jsonForm.set("email", email);
    }
    const instagram = data.get("instagram");
    if (instagram) {
      jsonForm.set("instagram", instagram);
    }
    const github = data.get("github");
    if (github) {
      jsonForm.set("github", github);
    }
    const telegram = data.get("telegram");
    if (telegram) {
      jsonForm.set("telegram", telegram);
    }
    const linkedin = data.get("linkedin");
    if (linkedin) {
      jsonForm.set("linkedin", linkedin);
    }
    console.log(jsonForm);
    const form = Object.fromEntries(jsonForm);
    const response = await fetch("http://localhost:3000/personas/" + data.get("id"), {
      method: "PATCH",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        "Authorization": JWT || ""
      }
    });
    if (response.status === 401) {
      return fail(response.status, { error: "Unauthorized" });
    } else if (response.status !== 200) {
      return fail(response.status, { error: response.statusText });
    }
    return { success: "Updated" };
  }
};
export {
  actions
};
