import { e as error, f as fail } from './index-0087e825.js';

const load = async ({ fetch, params }) => {
  if (params.id.length != 24) {
    throw error(404, {
      message: "Not found"
    });
  }
  const response = await fetch("http://localhost:3000/personas/" + params.id);
  if (response.ok) {
    let data = await response.json();
    return { data };
  } else {
    throw error(response.status, {
      message: response.statusText
    });
  }
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-dac5407b.js')).default;
const universal_id = "src/routes/edit/personas/[id]/+page.ts";
const server_id = "src/routes/edit/personas/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/15.508f8756.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/forms.ff805141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/PeopleCard.2abfec13.js","_app/immutable/chunks/Title.eef844be.js"];
const stylesheets = ["_app/immutable/assets/15.474f330d.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/PeopleCard.c1a5d36c.css","_app/immutable/assets/Title.6d76f96b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=15-9cb1e8a3.js.map
