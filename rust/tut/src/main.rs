#![allow(unused)]

use std::fs;

fn main() -> Result<(), std::io::Error> {

  let vec = fs::read("files/C0FFEE.hex")?;
  println!("{:?}", vec);

  let vec2 = vec.iter()
    .map(|byte| { byte / 2 });
  println!("{:?}", vec2.collect::<Vec<u8>>());

  println!("{:?}", vec.as_slice());

  Ok(())
}
