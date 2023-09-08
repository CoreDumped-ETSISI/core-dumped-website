import { c as create_ssr_component, g as add_attribute, e as escape } from "./ssr.js";
const PeopleCard_svelte_svelte_type_style_lang = "";
const css = {
  code: '.card.svelte-17axuuf{display:flex;flex-direction:column;align-items:center;justify-items:center}img.svelte-17axuuf{width:200px;height:200px;object-fit:fill;border-radius:100px;margin:8px}h2.svelte-17axuuf{text-align:center}h3.svelte-17axuuf{text-align:center;margin-bottom:8px}h3.svelte-17axuuf:after{content:"";display:block;margin:0 auto;width:200px;padding-top:5px;border-bottom:2px solid #5fb030}',
  map: null
};
const PeopleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { photo = "PeoplePlaceholder.png" } = $$props;
  let { appointment } = $$props;
  let { socials } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.photo === void 0 && $$bindings.photo && photo !== void 0)
    $$bindings.photo(photo);
  if ($$props.appointment === void 0 && $$bindings.appointment && appointment !== void 0)
    $$bindings.appointment(appointment);
  if ($$props.socials === void 0 && $$bindings.socials && socials !== void 0)
    $$bindings.socials(socials);
  $$result.css.add(css);
  return `  <div class="card svelte-17axuuf"><img${add_attribute("src", photo, 0)} alt="${escape(name, true) + "'s photo"}" class="svelte-17axuuf"> <h2 class="svelte-17axuuf">${escape(name)}</h2> <h3 class="svelte-17axuuf">${escape(appointment)}</h3> ${socials.size > 0 ? `<div class="footer_socials"><ul>${socials.get("email") !== void 0 ? `<li><a href="${"mailto:" + escape(socials.get("email"), true)}"><i data-svelte-h="svelte-1sv58a2"><i class="fa-solid fa-envelope fa-2xl"></i></i></a></li>` : ``} ${socials.get("github") !== void 0 ? `<li><a${add_attribute("href", socials.get("github"), 0)}><i class="fa-brands fa-github fa-2xl"></i></a></li>` : ``} ${socials.get("telegram") !== void 0 ? `<li><a${add_attribute("href", socials.get("telegram"), 0)}><i class="fa-brands fa-telegram fa-2xl"></i></a></li>` : ``} ${socials.get("discord") !== void 0 ? `<li><a${add_attribute("href", socials.get("discord"), 0)}><i class="fa-brands fa-discord fa-2xl"></i></a></li>` : ``} ${socials.get("instagram") !== void 0 ? `<li><a${add_attribute("href", socials.get("instagram"), 0)}><i class="fa-brands fa-square-instagram fa-2xl"></i></a></li>` : ``} ${socials.get("linkedin") !== void 0 ? `<li><a${add_attribute("href", socials.get("linkedin"), 0)}><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>` : ``}</ul></div>` : ` <div class="footer_socials" data-svelte-h="svelte-1xpatg8"><ul><li><i><i class="fa-solid fa-envelope fa-2xl" style="color: transparent;"></i></i></li></ul></div>`} </div>`;
});
export {
  PeopleCard as P
};
