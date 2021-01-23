const wasm = "../target/wasm32-unknown-unknown/release/wasm_entry.wasm";

fetch(wasm)
  .then((res) => res.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, {}))
  .then((results) => console.log(results.instance.exports.add(1, 2)));
