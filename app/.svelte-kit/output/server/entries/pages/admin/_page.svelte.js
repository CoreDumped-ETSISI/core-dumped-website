import { c as create_ssr_component, b as subscribe, e as escape } from "../../../chunks/ssr.js";
import "devalue";
import { g as goto } from "../../../chunks/navigation.js";
import { p as page } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".center.svelte-c6a0x1{display:flex;justify-content:center;align-items:center}img.svelte-c6a0x1{max-width:200px}input.svelte-c6a0x1{height:max-content;border:transparent;font-size:16px;border-bottom:1px solid #5fb030;background-color:transparent;padding:4px}input.svelte-c6a0x1:focus{border-radius:8px;border-bottom:1px solid transparent;outline:2px solid #5fb030}.container.svelte-c6a0x1{display:flex;flex-direction:column;gap:8px;border-radius:24px;padding:24px;max-height:fit-content;background:white;justify-content:center;align-items:center;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.3)}button.svelte-c6a0x1{width:fit-content;background-color:#5fb030;color:white;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205);border-radius:16px;border:transparent;padding:6px}button.svelte-c6a0x1:active{box-shadow:none}.error.svelte-c6a0x1{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    if (form?.success) {
      if ($page.url.searchParams.has("back")) {
        history.back();
      } else {
        goto("edit/cartas");
      }
    }
  }
  $$unsubscribe_page();
  return `<div class="center svelte-c6a0x1"><div class="container svelte-c6a0x1"><img src="/logo.png" alt="logo" class="svelte-c6a0x1"> <form method="POST"><input name="password" type="password" id="password" placeholder="Contraseña" required class="svelte-c6a0x1"> <button type="submit" class="svelte-c6a0x1" data-svelte-h="svelte-1oikqox">Iniciar sesión</button> ${form?.error ? `<div class="error svelte-c6a0x1">! ${escape(form.error)}</div>` : ``}</form></div> </div>`;
});
export {
  Page as default
};
