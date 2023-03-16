import { openBlock as n, createElementBlock as r, normalizeClass as s, renderSlot as p } from "vue";
import "./index.vue2.js";
import a from "../../../_virtual/_plugin-vue_export-helper.js";
const l = {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    typeClass() {
      return `button-${this.type}`;
    }
  }
};
function u(t, e, d, f, c, o) {
  return n(), r("button", {
    class: s(["button", o.typeClass]),
    onClick: e[0] || (e[0] = (i) => t.$emit("click"))
  }, [
    p(t.$slots, "default", {}, void 0, !0)
  ], 2);
}
const b = /* @__PURE__ */ a(l, [["render", u], ["__scopeId", "data-v-b093f59f"]]);
export {
  b as default
};
