const imports = {
  env: {
    date_now: Date.now,
  },
};

const wasm = "../target/wasm32-unknown-unknown/release/wasm_entry.wasm";
const toUint32 = (num) => num >>> 0;
fetch(wasm)
  .then((res) => res.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, imports))
  .then((results) => {
    const { add, get_timestamp, rand } = results.instance.exports;
    console.log(add(1, 2));
    console.log(get_timestamp());
    console.log(toUint32(rand()));
  });
