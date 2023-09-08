import { f as fail } from './index-0087e825.js';

const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const password = data.get("password");
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status != 200) {
      return fail(response.status, { error: "Contraseña incorrecta" });
    }
    const login = await response.json();
    event.cookies.set("AuthorizationToken", `Bearer ${login.token}`, {
      httpOnly: true,
      path: "/",
      secure: false,
      //TODO set to true when SSL certificates are added
      sameSite: "strict",
      maxAge: 60 * 60 * 2
      // 2h
    });
    return { success: "Auth successful" };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-05600226.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/11.74ddd66a.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/forms.ff805141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/stores.e1744db4.js"];
const stylesheets = ["_app/immutable/assets/11.b5351ee1.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-c392bd0a.js.map
