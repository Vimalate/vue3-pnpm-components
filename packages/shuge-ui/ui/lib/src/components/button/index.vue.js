"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./index.vue2.js");const s=require("../../../_virtual/_plugin-vue_export-helper.js"),l=e.defineComponent({name:"SButton"}),a=Object.assign(l,{props:{type:{type:String,default:"default"}},setup(o){const u=o,r=e.computed(()=>`button-${u.type}`);return(t,n)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["button",e.unref(r)]),onClick:n[0]||(n[0]=i=>t.$emit("click"))},[e.renderSlot(t.$slots,"default",{},void 0,!0)],2))}}),c=s.default(a,[["__scopeId","data-v-637feb56"]]);exports.default=c;
