import { c as create_ssr_component, v as validate_component, f as each } from './ssr-27bb2042.js';
import { C as CardComponent } from './CardComponent-837677bd.js';
import { f as filter, F as Filters } from './Filters-d63ad90f.js';
import { G as Grid } from './Grid-7d3d7cc4.js';
import { T as Title } from './Title-dc0a02e0.js';
import './StatusTag-a6baed80.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let search_text = "";
  let status_filter = "";
  let category_filter = "";
  let date_filter = "";
  let categories = data.categories;
  let statuses = ["En progreso", "Completado", "Próximamente", "Cancelado"];
  let filtered;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filtered = filter(data.projects, search_text, status_filter, category_filter, date_filter);
    $$rendered = `  ${validate_component(Title, "Title").$$render($$result, {}, {}, {
      default: () => {
        return `Proyectos`;
      }
    })} ${validate_component(Filters, "Filters").$$render(
      $$result,
      {
        categories,
        statuses,
        search_text,
        status_filter,
        category_filter,
        date_filter
      },
      {
        search_text: ($$value) => {
          search_text = $$value;
          $$settled = false;
        },
        status_filter: ($$value) => {
          status_filter = $$value;
          $$settled = false;
        },
        category_filter: ($$value) => {
          category_filter = $$value;
          $$settled = false;
        },
        date_filter: ($$value) => {
          date_filter = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${each(filtered, (item) => {
          return `${validate_component(CardComponent, "CardComponent").$$render(
            $$result,
            {
              id: item._id,
              title: item.title,
              description: item.description,
              image_src: item.image,
              date: item.date,
              category: item.category,
              status: item.status
            },
            {},
            {}
          )}`;
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d8a3a231.js.map
