export const date_now = Date.now;

import("./wasm_entry").then((module) => {
  const { add, get_timestamp } = module;
  console.log(module);
  console.log(add(1, 2));
  console.log(get_timestamp());
});
