import { defineComponent as a, resolveComponent as o, openBlock as n, createBlock as r, mergeProps as c } from "vue";
const p = a({
  name: "SInput"
}), d = /* @__PURE__ */ Object.assign(p, {
  props: {
    clearable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  setup(e) {
    return (l, u) => {
      const t = o("el-input");
      return n(), r(t, c(l.$attrs, {
        placeholder: e.placeholder,
        clearable: e.clearable
      }), null, 16, ["placeholder", "clearable"]);
    };
  }
});
export {
  d as default
};
