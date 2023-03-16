const a = (n) => (n.install = (e) => {
  const t = n.name || n.__name;
  console.log("comp", t, n), e.component("s-" + t, n);
}, n);
export {
  a as default
};
