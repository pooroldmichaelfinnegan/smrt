const fs = require('fs')
const axios = require('axios')

const ords = require('./json/ords221229-220105.json')

const simple = ['som']
const out = {}

const GTget = async (ord) => {
  const URL = `https://translate.googleapis.com/translate_a/single`
            + `?client=gtx`
            + `&dt=t`
            + `&dt=bd`
            + `&dj=1`
            + `&sl=da`
            + `&tl=en`
            + `&q=${ord}`

  const orddata = await axios.get(URL)
  
  return orddata
}


simple.map(ord => {
  console.log(' >>> HERE ', ord)
  GTget(ord)
    .then(json => json)
    // .then(json => json.dict)
    // .then(data => JSON.stringify(data))
    .then(str => console.log(str))
})


// GTget('rar')
//   .then(out => console.log(out))
