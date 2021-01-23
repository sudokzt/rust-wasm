#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// signature: rust understands another lang functions
extern "C" {
    fn date_now() -> f64;
}

#[no_mangle]
pub fn get_timestamp() -> f64 {
    unsafe { date_now() }
}

extern crate tinymt;
use tinymt::tinymt32;

#[no_mangle]
pub fn rand() -> u32 {
    // TinyMT という乱数生成方式
    let param = tinymt32::Param {
        mat1: 0x8F7011EE,
        mat2: 0xFC78FF1F,
        tmat: 0x3793fdff,
    };
    let seed = 1;
    tinymt32::from_seed(param, seed).gen()
}
