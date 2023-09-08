import { c as create_ssr_component, e as escape } from './ssr-27bb2042.js';

const css = {
  code: ".grid.svelte-4tunui{align-items:center;justify-items:center;width:90%;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));grid-gap:16px 16px}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 300 } = $$props;
  let { gap = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  $$result.css.add(css);
  return `  <div class="grid svelte-4tunui" style="${"grid-template-columns: repeat(auto-fit, minmax(" + escape(width, true) + "px, 1fr)); grid-gap: " + escape(gap, true) + "px " + escape(gap, true) + "px;"}">${slots.default ? slots.default({}) : ``} </div>`;
});

export { Grid as G };
//# sourceMappingURL=Grid-7d3d7cc4.js.map
