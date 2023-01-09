const data = { 
  "sentences": [{ "trans": "as",
                  "orig": "som",
                  "backend": 1 }],
  "dict": [{ "pos": "adverb",
              "terms": [ "as" ],
              "entry": [{ "word": "as",
                          "reverse_translation": [ "som",
                                                   "ligesom" ],
                          "score": 0.29101658 }],
              "base_form": "som",
              "pos_enum": 4 },
            { "pos": "pronoun",
              "terms": [ "that",
                         "who" ],
              "entry": [{ "word": "that",
                          "reverse_translation": [ "som",
                                                   "det",
                                                   "den" ],
                          "score": 0.061961006 },
                        { "word": "who",
                          "reverse_translation": [ "der",
                                                   "som",
                                                   "hvem" ],
                          "score": 0.045331642 }],
              "base_form":" som",
              "pos_enum": 8 },
            { "pos": "adjective",
              "terms": [ "these" ],
              "entry": [{ "word": "these",
                          "reverse_translation": [ "der",
                                                   "som" ]}],
              "base_form":"som",
              "pos_enum": 3 }],
  "src": "da",
  "spell": {}}


const parser = data.dict.map(lex => {
  return { lex["pos"]: {
    lex.entry.map(entry => {
      return { entry["word"]: [ ...entry.reverse_translation ]}
    })
  }}
})

console.log(parsed)
