#![allow(unused)]

use std::fs;

fn main() -> Result<(), std::io::Error> {

  let vec = fs::read("files/C0FFEE.hex")?;
  println!("{:?}", vec);

  let vec2 = vec.iter()
    .map(|byte| { byte / 2 });
  println!("{:?}", vec2.collect::<Vec<u8>>());

<<<<<<< HEAD:rust/fs/src/main.rs
  // println!("{:?}", String::from_utf8(vec).unwrap());
  let mut v: Vec<u8> = vec![];

  for i in 0..10 {
    v.push(i);
  }

  println!("{:?}", v);
=======
  println!("{:?}", vec.as_slice());
>>>>>>> parent of 36c28f8 (eggs.txt):rust/tut/src/main.rs

  Ok(())
}
