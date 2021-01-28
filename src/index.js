import("./wasm_entry.js").then((module) => {
  const { add, get_timestamp } = module;
  console.log(module);
  console.log(add(1, 2));
  console.log(get_timestamp());
});
