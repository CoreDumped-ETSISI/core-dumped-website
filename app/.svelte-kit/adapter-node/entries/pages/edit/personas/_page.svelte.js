import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import { P as PeopleCard } from "../../../../chunks/PeopleCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".edit.svelte-1fucx8y{display:flex;flex-direction:column;gap:8px;align-items:center}.button.svelte-1fucx8y{all:unset;background-color:#5fb030;color:white;padding:12px;border-radius:6px;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `  ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.data, (item) => {
        return `<div class="edit svelte-1fucx8y">${validate_component(PeopleCard, "PeopleCard").$$render(
          $$result,
          {
            name: item.name,
            appointment: item.appointment,
            photo: item.image,
            socials: /* @__PURE__ */ new Map([
              ["discord", item.discord],
              ["email", item.email],
              ["instagram", item.instagram],
              ["telegram", item.telegram],
              ["github", item.github],
              ["linkedin", item.linkedin]
            ])
          },
          {},
          {}
        )} <div class="button svelte-1fucx8y"><a href="${"/edit/personas/" + escape(item._id, true)}"><i class="fa-solid fa-pen-to-square fa-2xl" style="color: #ffffff;"></i></a></div> </div>`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
