import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { C as CardComponent } from "../../../chunks/CardComponent.js";
import { G as Grid } from "../../../chunks/Grid.js";
import { T as Title } from "../../../chunks/Title.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` <div class="news_wrap">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Novedades`;
    }
  })} ${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.data, (item) => {
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
  })}</div>`;
});
export {
  Page as default
};
