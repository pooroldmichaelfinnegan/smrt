const get = async (url) => {
  await fetch(url)
    .then(response => response.body.getReader())
    .then(reader => console.log(reader))
    .catch(error => console.log(error)
  )
}

const obj = get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=da&tl=en&dt=t&dt=bd&dj=1&q=kartoffel`)

// stuck on reader thing