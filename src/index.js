import * as modules from "./wasm_entry.js";

const { add, get_timestamp, bare } = modules;
console.log(modules);
console.log(add(1, 2));
console.log(get_timestamp());
