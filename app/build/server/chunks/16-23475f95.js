import { e as error, f as fail, r as redirect } from './index-0087e825.js';

const load = async ({ fetch, params }) => {
  if (params.id.length != 24) {
    throw error(404, {
      message: "Not found"
    });
  }
  const response = await fetch("http://localhost:3000/cartas/" + params.id);
  if (response.ok) {
    let data = await response.json();
    const eventRes = await fetch("http://localhost:3000/eventos/categorias");
    const projectRes = await fetch("http://localhost:3000/proyectos/categorias");
    let events = await eventRes.json();
    let projects = await projectRes.json();
    return { events, projects, data };
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
  update: async (event) => {
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
    const response = await fetch("http://localhost:3000/cartas/" + data.get("id"), {
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
  },
  delete: async (event) => {
    const JWT = event.cookies.get("AuthorizationToken");
    const data = await event.request.formData();
    const response = await fetch("http://localhost:3000/cartas/" + data.get("id"), {
      method: "DELETE",
      headers: {
        "Authorization": JWT || ""
      }
    });
    if (response.status === 401) {
      return fail(response.status, { error: "Unauthorized" });
    } else if (response.status !== 200) {
      return fail(response.status, { error: response.statusText });
    }
    throw redirect(300, "/edit/cartas");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-03219ef1.js')).default;
const universal_id = "src/routes/edit/[id]/+page.ts";
const server_id = "src/routes/edit/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/16.6b128f91.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.ff805141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/CardComponent.eed2c840.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Title.eef844be.js"];
const stylesheets = ["_app/immutable/assets/16.ce9b2492.css","_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Title.6d76f96b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=16-23475f95.js.map
