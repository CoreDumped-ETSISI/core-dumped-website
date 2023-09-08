import { c as create_ssr_component, v as validate_component, f as each, e as escape } from './ssr-27bb2042.js';
import { C as CardComponent } from './CardComponent-837677bd.js';
import { f as filter, F as Filters } from './Filters-d63ad90f.js';
import { G as Grid } from './Grid-7d3d7cc4.js';
import './StatusTag-a6baed80.js';

const css = {
  code: ".selector.svelte-1mpze8f{height:max-content;border:transparent;font-size:16px;border-bottom:1px solid #5fb030;background-color:transparent}.selector.svelte-1mpze8f:focus{outline:none}select.svelte-1mpze8f{padding-bottom:2px;margin-left:8px}.edit.svelte-1mpze8f{display:flex;flex-direction:column;gap:8px;align-items:center}.floatingActionButton.svelte-1mpze8f{all:unset;cursor:pointer;position:fixed;right:0;bottom:0;margin-bottom:15vh;margin-right:5vh;background-color:#5fb030;color:white;padding:12px;border-radius:6px;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205)}.floatingActionButton.svelte-1mpze8f:active{box-shadow:none}.button.svelte-1mpze8f{all:unset;background-color:#5fb030;color:white;padding:12px;border-radius:6px;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let search_text = "";
  let status_filter = "";
  let category_filter = "";
  let date_filter = "";
  let categories;
  let statuses = ["En progreso", "Completado", "Próximamente", "Cancelado"];
  let filtered_type;
  let filtered;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        filtered_type = [...data.cards];
        categories = [
          ... new Set([...data.eventCategories, ...data.projectCategories])
        ];
      }
    }
    filtered = filter(filtered_type, search_text, status_filter, category_filter, date_filter);
    $$rendered = `  <label for="type" data-svelte-h="svelte-gcye9a">Tipo:</label> <select class="selector svelte-1mpze8f" name="type" id="type"><option value="" data-svelte-h="svelte-uh9n4x">Todos</option><option value="Proyecto" data-svelte-h="svelte-hogk6x">Proyectos</option><option value="Evento" data-svelte-h="svelte-1qzrxgd">Eventos</option></select> ${validate_component(Filters, "Filters").$$render(
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
          return `<div class="edit svelte-1mpze8f">${validate_component(CardComponent, "CardComponent").$$render(
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
          )} <div class="button svelte-1mpze8f"><a href="${"/edit/" + escape(item._id, true)}"><i class="fa-solid fa-pen-to-square fa-2xl" style="color: #ffffff;"></i></a></div> </div>`;
        })}`;
      }
    })} <a href="/edit/add" class="floatingActionButton svelte-1mpze8f" data-svelte-h="svelte-tos44o"><i class="fa-solid fa-plus fa-2xl"></i></a>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-62bbe613.js.map
