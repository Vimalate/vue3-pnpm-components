import e from "./src/components/index.js";
import { default as s } from "./src/components/button/index.js";
import { default as u } from "./src/components/input/index.js";
const r = {
  install: (t) => e.forEach((o) => t.use(o))
};
export {
  s as SButton,
  u as SInput,
  r as default
};
