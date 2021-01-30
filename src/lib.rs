extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// fire when starting
#[wasm_bindgen(start)]
pub fn run() {
    bare();
}

pub fn bare() {
    log("Hello WASM");
}

#[wasm_bindgen]
extern "C" {
    // bind to namespace
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// use exported module from JS
#[wasm_bindgen(module = "/src/test.js")]
extern "C" {
    #[wasm_bindgen(js_name = dateNow)]
    fn date_now() -> f64;
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn get_timestamp() -> f64 {
    date_now()
}
