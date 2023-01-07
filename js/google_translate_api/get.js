const fs = require('fs')
const axios = require('axios')

const ords = require('./json/ords221229-220105.json')
const simple = ['som', 'kartoffel', 'ved']

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

const parseData = data => {
  const str = []
  
  const orig = data.sentences[0].orig
  str.push(orig)

  const trans = data.sentences[0].trans
  str.push(trans)
  
  if (data.dict === undefined) return str

  const lexCats = parseLexCats(data.dict)

  return str.concat(lexCats)
}
const parseLexCats = dict => dict.map(cat => `${cat.pos}: ${cat.terms.join(', ')}`)

ords.map(ord => {
  // console.log(' >>> HERE ', ord)
  GTget(ord)
    .then(json => json.data)
    .then(data => parseData(data))
    .then(log => console.log(log))
})
