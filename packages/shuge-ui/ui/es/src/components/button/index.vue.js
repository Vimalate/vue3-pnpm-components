import { defineComponent as r, computed as p, openBlock as u, createElementBlock as l, normalizeClass as a, unref as c, renderSlot as f } from "vue";
import "./index.vue2.js";
import d from "../../../_virtual/_plugin-vue_export-helper.js";
const i = r({
  name: "SButton"
}), m = /* @__PURE__ */ Object.assign(i, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(o) {
    const n = o, s = p(() => `button-${n.type}`);
    return (t, e) => (u(), l("button", {
      class: a(["button", c(s)]),
      onClick: e[0] || (e[0] = (_) => t.$emit("click"))
    }, [
      f(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), C = /* @__PURE__ */ d(m, [["__scopeId", "data-v-637feb56"]]);
export {
  C as default
};
