import * as wasm from './wasm_entry_bg.wasm';

/**
*/
export function run() {
    wasm.run();
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
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
* @returns {number}
*/
export function get_timestamp() {
    var ret = wasm.get_timestamp();
    return ret;
}

export const __wbg_log_afa9c29474114568 = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
};

