import("./wasm_entry").then((module) => {
  const { add, get_timestamp,bare } = module;
  console.log(module);
  console.log(add(1, 2));
  console.log(get_timestamp());
});
