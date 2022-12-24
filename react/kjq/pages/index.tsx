import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import React, { useState, useEffect } from "react"


const subject = [["i", "jeg"],["you", "du"],["he", "han"],["she", "hun"],["we", "vi"],["you", "i"],["they", "de"]]
const object = [["me", "mig"],["you", "dig"],["him", "ham"],["her", "hende"],["us", "os"],["you", "jer"],["them", "dem"]]

const egg = [
  ["af", "off"],
  ["at", "to, that, as to"],
  ["av", "of"],
  ["bag", "behind"],
  ["blitt", "become"],
  ["eller", "or"],
  ["fint", "fine"],
  ["før", "until, before"],
  ["fordi", "because"],
  ["frå", "from"],
  ["hvilken", "which"],
  ["hvis", "if"],
  ["lave", "make"],
  ["med", "with"],
  ["men", "but"],
  ["mens", "while, as"],
  ["når", "when"],
  ["nær", "near"],
  ["òg", "and"],
  ["om", "about, on, if, whether, in"],
  ["på", "on"],
  ["rører ved", "touching"],
  ["sjå", "see, look"],
  ["som", "what, that, like, as"],
  ["to", "to, for, into, until"],
  ["uden", "without"],
  ["være", "be, have, make"],
  ["var", "was, had, where"],
  ["ved", "near, at, know, to"]
]


// import måneder_months from "../arrays/måneder__months.json"
// import months_måneder from "../arrays/months__måneder.json"
// import ugens_dage__days_of_the_week from "../arrays/ugens_dage__days_of_the_week.json"
// import days_of_the_week__ugens_dage from "../arrays/days_of_the_week__ugens_dage.json"
// import oneToTwenty from "../arrays/numbers.json"
import simp from "../arrays/simple.json"
import { prependOnceListener } from "process"

import people from "../arrays/FunEasyLearn/people.json"
import describing_people from "../arrays/FunEasyLearn/describing_people.json"
import fashion from "../arrays/FunEasyLearn/fashion.json"
import body from "../arrays/FunEasyLearn/body.json"
import health from "../arrays/FunEasyLearn/health.json"
import house from "../arrays/FunEasyLearn/house.json"
import shopping from "../arrays/FunEasyLearn/shopping.json"
import food_drink from "../arrays/FunEasyLearn/food_drink.json"
import education from "../arrays/FunEasyLearn/education.json"
import work from "../arrays/FunEasyLearn/work.json"
import culture from "../arrays/FunEasyLearn/culture.json"
import leisure_time from "../arrays/FunEasyLearn/leisure_time.json"
import sport from "../arrays/FunEasyLearn/sport.json"
import city from "../arrays/FunEasyLearn/city.json"
import transport from "../arrays/FunEasyLearn/transport.json"
import communications from "../arrays/FunEasyLearn/communications.json"
import security from "../arrays/FunEasyLearn/security.json"
import animals from "../arrays/FunEasyLearn/animals.json"
import plants from "../arrays/FunEasyLearn/plants.json"
import environment from "../arrays/FunEasyLearn/environment.json"
import systems from "../arrays/FunEasyLearn/systems.json"
import verbs from "../arrays/FunEasyLearn/verbs.json"
import adjectives from "../arrays/FunEasyLearn/adjectives.json"
import adverbs from "../arrays/FunEasyLearn/adverbs.json"
import other from "../arrays/FunEasyLearn/other.json"

const FunEasyLearn = [
  ...people,
  // ...describing_people,
  // ...fashion,
  // ...body,
  // ...health,
  // ...house,
  // ...shopping,
  // ...food_drink,
  // ...education,
  // ...work,
  // ...culture,
  // ...leisure_time,
  ...sport,
  ...city,
  ...transport,
  ...communications,
  ...security,
  ...animals,
  ...plants,
  ...environment,
  ...systems,
  ...verbs,
  ...adjectives,
  ...adverbs,
  ...other
]

const arr = FunEasyLearn
// let withCount = arr.map((words) => {
//   console.log("use effect first", words)
//   return [5, ...words]
// })

// function handleCount(word) {
//   withCount.map(ord => {
//     if (word === ord[1] || word === ord[2]) {
//       return [ ord[0] - 1, ord[1], ord[2] ]
//     }
//     return ord
//   })
// }

// console.log(">>>>>>>>> withCount ", withCount)

export default function Home() {
  const [engDan, setEngDan] = useState(0)
  const [answers, setAnswers] = useState([])
  const [inputField, setInputField] = useState("")
  const [ord, setOrd] = useState(["music", "musik"])
  const [withCount, setWithCount] = useState(arr.map((words) => { return [1, ...words] }))
  // const [wordsStill, setWordsStill] = useState(withCount.map(word => { if (word[0] > 0) { return word }}))

  // console.log(" >>>> wordsstill", wordsStill)
  // console.log(" >>>> before", ord[0])

  useEffect(() => {
    const rand = random(wordsStillFunc())
    // console.log(" >>>>>>>>>>>>>>>>> effect", rand)
    setOrd(rand)
  }, answers)

  function wordsStillFunc() {
    const arr = []

    withCount.map(word => {
      if (word[0] > 0) { arr.push(word) }
    })

    console.log(" >>>>>>>>>>>>>>>>> func arr", arr)

    if (arr.length == 0) {
      console.log( "ARRAY IS EMPTY" )
      return [[ 999, "FINISHED", "FINISHED" ]]
    }
    return arr
  }

  function random(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  // console.log(" >>>> egg", ord)

  return (
    <div className="flex flex-row w-full">
      <div className="w-1/3">
        <ListOfWords list={withCount} />
      </div>

      <div className="flex flex-col items-center h-full w-2/3 text-center">
        <h1 className="text-8xl mt-[10px]">{engDan ? ord[1] : ord[2]}</h1>
        {/* <h1 className="text-8xl mt-[10px]">{engDan ? "true" : "false"}</h1> */}

        <button onClick={() => setEngDan(!engDan)} >
          {engDan ? "dan/eng" : "eng/dan"}
        </button>

        <Input
          engDan={engDan}
          ord={ord}
          inputField={inputField}
          setInputField={setInputField}
          answers={answers}
          setAnswers={setAnswers}
          withCount={withCount}
          setWithCount={setWithCount}
        />

        <div className="w-full text-base">
          <DisplayAnswers
            engDan={engDan}
            answers={answers}
          />
        </div>
      </div>
    </div>
)}


// function Card({ answers, setAnswers }) {
//   const [inputField, setInputField] = useState("")

//   return <div>
//     {/* card<br /> */}

//     <Input inputField={inputField} setInputField={setInputField} answers={answers} setAnswers={setAnswers} /><br />
//     {inputField}
//   </div>
// }


function Input({ engDan, ord, inputField, setInputField, answers, setAnswers, withCount, setWithCount }) {
  console.log(" >>>> input ord", ord)
  const toggle = engDan ? ord[0] : ord[1]
  
  const handleAnswerChange = (event) => {
    switch( event.key ) {
      case "Enter":
        if ((inputField === ord[1]) || (inputField === ord[2])) {
          setWithCount( withCount.map(word => {
            // if (word[0] < 1) return
            if ((ord[1] === word[1] || ord[2] === word[2]) || (ord[1] === word[2] || ord[2] === word[1])) {
              // console.log(`>>> ${ord[1]}\n>>> ${ord[2]}\ntrue\n ${word}>>>\n>>>\n`)

              return [ word[0] - 1, word[1], word[2] ]
            }
            return word
          }))
        } else {
          setWithCount( withCount.map(word => {
            // if (word[0] < 1) return
            if ((ord[1] === word[1] || ord[2] === word[2]) || (ord[1] === word[2] || ord[2] === word[1])) {
              // console.log(`>>> ${ord[1]}\n>>> ${ord[2]}\ntrue\n ${word}>>>\n>>>\n`)

              return [ word[0] + 2, word[1], word[2] ]
            }
            return word
          }))
        }

        setAnswers(
          [{ rightWrong: ((inputField === ord[1]) || (inputField === ord[2])) ? "text-lime-500" : "text-red-500",
              word1: ord[1],
              word2: ord[2],
              input: inputField },
          ...answers ])

        setInputField("")

  }}

  return <input
    className="text-white-900 text-center my-4 w-full"
    type="text"
    onKeyDown={handleAnswerChange}
    value={inputField}
    onChange={(e) => {
      setInputField(e.target.value)
    }}
  />
}


function DisplayAnswers({ engDan, answers }) {
  // console.log("ansewrs >>> ", answers)

  return answers.map((row: string[]) => {
    const toggle = engDan ? row[1] : row[2]

    return (
      <div className={`flex flex-row justify-center}`}>
        <div className={`flex-1 py-1 px-3 truncate`}>{row["word1"]}</div>
        <div className={`flex-1 py-1 px-3 truncate`}>{row["word2"]}</div>
        <div className={`flex-1 py-1 px-3 truncate ${row["rightWrong"]}`}>{row["input"]}</div>
      </div>
  )})
}


function ListOfWords({ list }) {
  const array = []

  list.map((ord) => { if (ord[0] > 0) { array.push(ord) }})

  console.log("list >>>>>>>>", list)
  console.log("array >>>>>>>>", array)

  return array.map((ord) => {
    return <div className="border-[1px] border-gray-800 text-xs flex flex-row justify-center align-center">
      <div className={`flex-2 py-1 px-3 truncate text-xl`}>{ord[0]}</div>
      <div className={`flex-1 py-1 px-3 truncate`}>{ord[1]}</div>
      <div className={`flex-1 py-1 px-3 truncate`}>{ord[2]}</div>
    </div>
  })
}
