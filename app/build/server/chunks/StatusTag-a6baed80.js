import { c as create_ssr_component, e as escape } from './ssr-27bb2042.js';

/* empty css                                         */const css = {
  code: ".tag.svelte-10kc5ba{border-radius:24px;width:max-content;padding:8px;color:white;margin-top:8px;border:2px solid transparent}",
  map: null
};
const StatusTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  const colors = /* @__PURE__ */ new Map();
  colors.set("Próximamente", "blue");
  colors.set("En progreso", "orange");
  colors.set("Completado", "#5fb030");
  colors.set("Cancelado", "red");
  let status_color = colors.get(status) || "black";
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `  <div class="tag svelte-10kc5ba" style="${"background-color: " + escape(status_color, true) + ";"}"><p>${escape(status)}</p> </div>`;
});

export { StatusTag as S };
//# sourceMappingURL=StatusTag-a6baed80.js.map
