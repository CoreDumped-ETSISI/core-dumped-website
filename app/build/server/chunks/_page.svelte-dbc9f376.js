import { c as create_ssr_component, v as validate_component, f as each } from './ssr-27bb2042.js';
import { G as Grid } from './Grid-7d3d7cc4.js';
import { P as PeopleCard } from './PeopleCard-f21b0af2.js';
import { T as Title } from './Title-dc0a02e0.js';

const css = {
  code: ".about.svelte-1o370vb{text-align:left;padding:8px;margin-bottom:16px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Sobre Nosotros`;
    }
  })} <p class="about svelte-1o370vb" data-svelte-h="svelte-ug2m5p">Core Dumped es una asociacion de estudiantes de la ETSISI-UPM. <br>
  Nos dedicamos a organizar proyectos, eventos y talleres educativos para nuestra
  escuela. <br> ¡Ven a visitarnos en la zona de asociaciones bajo al rotonda, al
  lado de la cafetería!</p> ${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Directiva`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, { width: 225 }, {}, {
    default: () => {
      return `${each(data.people, (item) => {
        return `${validate_component(PeopleCard, "PeopleCard").$$render(
          $$result,
          {
            name: item.name,
            appointment: item.appointment,
            photo: item.image,
            socials:  new Map([
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
        )}`;
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dbc9f376.js.map
