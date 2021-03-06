extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// Called when the wasm module is instantiated
#[wasm_bindgen(start)]
pub fn run() {
    bare();
}

pub fn bare() {
    log("Hello WASM");
    log32(100);
    multi_log(10, 20);
}

#[wasm_bindgen]
extern "C" {
    // bind to namespace
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // bind to namespace and method name
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log32(a: u32);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn multi_log(a: u32, b: u32);
}

// export function to use in JS(SIMPLE)
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// use exported module from JS
#[wasm_bindgen(module = "/src/assets/js/test.js")]
extern "C" {
    // use name that defined in JS
    #[wasm_bindgen(js_name = dateNow)]
    fn date_now() -> f64;
}

#[wasm_bindgen]
pub fn get_timestamp() -> f64 {
    date_now()
}
