#![allow(unused)]

use std::fs;
use std::str;

fn main() -> Result<(), std::io::Error> {

  // let vec = fs::read("files/c0ffee.hex")?; 
  let vec = fs::read("files/eggs.txt")?; 
  println!("{:?}", vec);

  let vec2 = vec.iter()
    .map(|byte| {byte / 2});
  println!("{:?}", vec2.collect::<Vec<u8>>());

  println!("{:?}", String::from_utf8(vec).unwrap());

  Ok(())
}
