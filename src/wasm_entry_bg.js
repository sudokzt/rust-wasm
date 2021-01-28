import * as wasm from './wasm_entry_bg.wasm';

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    var ret = wasm.add(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function hoge(a, b) {
    var ret = wasm.add(a, b);
    return ret;
}

/**
* @returns {number}
*/
export function get_timestamp() {
    var ret = wasm.get_timestamp();
    return ret;
}

