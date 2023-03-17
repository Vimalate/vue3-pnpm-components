import { computed as s, openBlock as p, createElementBlock as l, normalizeClass as u, unref as a, renderSlot as c } from "vue";
import "./index.vue2.js";
import d from "../../../_virtual/_plugin-vue_export-helper.js";
const f = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(o) {
    const n = o, r = s(() => `button-${n.type}`);
    return (t, e) => (p(), l("button", {
      class: u(["button", a(r)]),
      onClick: e[0] || (e[0] = (i) => t.$emit("click"))
    }, [
      c(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, k = /* @__PURE__ */ d(f, [["__scopeId", "data-v-a8d0fc40"]]);
export {
  k as default
};
