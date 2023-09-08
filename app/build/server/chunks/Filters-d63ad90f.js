import { c as create_ssr_component, g as add_attribute, f as each, e as escape, v as validate_component } from './ssr-27bb2042.js';

const css$1 = {
  code: ".svelte-12oljo3.svelte-12oljo3{box-sizing:border-box}.search-box.svelte-12oljo3.svelte-12oljo3{width:fit-content;height:fit-content;position:relative;margin-bottom:8px}.input-search.svelte-12oljo3.svelte-12oljo3{height:50px;width:50px;border-style:none;padding:10px;font-size:18px;letter-spacing:2px;outline:none;border-radius:25px;transition:all 0.5s ease-in-out;background-color:#fff;padding-right:40px;color:#5fb030;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205)}.input-search.svelte-12oljo3.svelte-12oljo3::placeholder{color:#5fb030;font-size:18px;letter-spacing:2px;font-weight:100}.btn-search.svelte-12oljo3.svelte-12oljo3{width:50px;height:50px;border-style:none;font-size:20px;font-weight:bold;outline:none;cursor:pointer;border-radius:50%;position:absolute;right:0px;color:#5fb030;background-color:transparent;pointer-events:painted;box-shadow:none}.btn-search.svelte-12oljo3:focus~.input-search.svelte-12oljo3{width:300px;border-radius:0px;background-color:transparent;border-bottom:1px solid #5fb030;color:#5fb030;box-shadow:none;transition:all 500ms cubic-bezier(0, 0.11, 0.35, 2)}.input-search.svelte-12oljo3.svelte-12oljo3:focus{width:300px;border-radius:0px;background-color:transparent;border-bottom:1px solid #5fb030;color:#5fb030;box-shadow:none;transition:all 500ms cubic-bezier(0, 0.11, 0.35, 2)}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { search_text = "" } = $$props;
  if ($$props.search_text === void 0 && $$bindings.search_text && search_text !== void 0)
    $$bindings.search_text(search_text);
  $$result.css.add(css$1);
  return `  <div class="search-box svelte-12oljo3"><button class="btn-search svelte-12oljo3" data-svelte-h="svelte-15bwiwt"><i class="fas fa-search svelte-12oljo3"></i></button> <input id="search" type="text" class="input-search svelte-12oljo3" placeholder="Escribe para buscar..."${add_attribute("value", search_text, 0)}> </div>`;
});
const css = {
  code: ".filters.svelte-14ms6os{margin-top:16px;display:flex;justify-content:space-between;align-items:center}.selectors.svelte-14ms6os{display:flex;flex-direction:row;flex-flow:row wrap;gap:8px}.selector.svelte-14ms6os{height:max-content;border:transparent;font-size:16px;border-bottom:1px solid #5fb030;background-color:transparent}.selector.svelte-14ms6os:focus{outline:none}select.svelte-14ms6os{padding-bottom:2px;margin-left:8px}button.svelte-14ms6os{width:fit-content;background-color:#5fb030;color:white;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205);border-radius:16px;border:transparent;padding:6px}button.svelte-14ms6os:active{box-shadow:none}",
  map: null
};
function sameMonth(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}
const filter = function(data, search_text, status_filter, category_filter, date_filter) {
  let array = [...data];
  if (search_text.length > 0) {
    array = array.filter((item) => item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search_text.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
  }
  if (status_filter.length > 0) {
    array = array.filter((item) => item.status.toLowerCase() === status_filter.toLowerCase());
  }
  if (category_filter.length > 0) {
    array = array.filter((item) => item.category.toLowerCase() === category_filter.toLowerCase());
  }
  if (date_filter.length > 0) {
    array = array.filter((item) => sameMonth(date_filter, item.date));
  }
  return array;
};
const Filters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { search_text = "" } = $$props;
  let { status_filter = "" } = $$props;
  let { category_filter = "" } = $$props;
  let { date_filter = "" } = $$props;
  let { categories } = $$props;
  let { statuses } = $$props;
  if ($$props.search_text === void 0 && $$bindings.search_text && search_text !== void 0)
    $$bindings.search_text(search_text);
  if ($$props.status_filter === void 0 && $$bindings.status_filter && status_filter !== void 0)
    $$bindings.status_filter(status_filter);
  if ($$props.category_filter === void 0 && $$bindings.category_filter && category_filter !== void 0)
    $$bindings.category_filter(category_filter);
  if ($$props.date_filter === void 0 && $$bindings.date_filter && date_filter !== void 0)
    $$bindings.date_filter(date_filter);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.statuses === void 0 && $$bindings.statuses && statuses !== void 0)
    $$bindings.statuses(statuses);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `   <div class="filters svelte-14ms6os"><div class="selectors svelte-14ms6os"><input id="date" class="selector date_select svelte-14ms6os" type="month"${add_attribute("value", date_filter, 0)}> <select id="status" class="selector svelte-14ms6os"><option value="" selected hidden data-svelte-h="svelte-obmuf2">Filtra por estado</option>${each(statuses, (status) => {
      return `<option${add_attribute("value", status.toLocaleLowerCase(), 0)}>${escape(status)}</option>`;
    })}</select> <select id="category" class="selector svelte-14ms6os"><option value="" selected hidden data-svelte-h="svelte-31eqt7">Filtra por categoría</option>${each(categories, (category) => {
      return `<option${add_attribute("value", category.toLocaleLowerCase(), 0)}>${escape(category)}</option>`;
    })}</select> <button class="svelte-14ms6os" data-svelte-h="svelte-wj6tbe">Restablecer</button></div> ${validate_component(Search, "Search").$$render(
      $$result,
      { search_text },
      {
        search_text: ($$value) => {
          search_text = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Filters as F, filter as f };
//# sourceMappingURL=Filters-d63ad90f.js.map
