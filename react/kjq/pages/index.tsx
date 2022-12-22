import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react'


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
import { prependOnceListener } from 'process'

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

const FunEasyLearn = [ ...people, 
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
  // ...sport,
  // ...city,
  // ...transport,
  // ...communications,
  // ...security,
  // ...animals,
  // ...plants,
  // ...environment,
  // ...systems,
  ...verbs,
  ...adjectives,
  ...adverbs,
  ...other
]

const arr = FunEasyLearn

export default function Home() {
  const [answers, setAnswers] = useState([])
  const [word, setWord] = useState("default")
  const [inputField, setInputField] = useState('')
  const [ord, setOrd] = useState(['music', 'musik'])


  useEffect(() => {
    setOrd(get(arr))
  }, answers)


  function get(array: string[][]) {
    return array[ Math.floor(Math.random() * array.length )]
  }


  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-8xl mt-[10px]">{ord[0]}</h1>
      <Input ord={ord} inputField={inputField} setInputField={setInputField} answers={answers} setAnswers={setAnswers} />
      <div className="w-1/2 text-base">
        <DisplayAnswers answers={answers} />
      </div>
      {/* <Card answers={answers} setAnswers={setAnswers} /> */}
    </div>
  )
}


// function Card({ answers, setAnswers }) {
//   const [inputField, setInputField] = useState('')

//   return <div>
//     {/* card<br /> */}

//     <Input inputField={inputField} setInputField={setInputField} answers={answers} setAnswers={setAnswers} /><br />
//     {inputField}
//   </div>
// }


function Input({ ord, inputField, setInputField, answers, setAnswers }) {
  // const toggle
  const handleAnswerChange = (event) => {
    switch( event.key ) {
      case 'Enter':
        if ( inputField ) {
          setInputField('')
          setAnswers([[ inputField === ord[1] ? "text-lime-500" : "text-red-500", ord[0], ord[1], inputField ], ...answers ])
  }}}

  return <input
    className="text-white-900 text-center my-4"
    type="text"
    onKeyDown={handleAnswerChange}
    value={inputField}
    onChange={(e) => {
      setInputField(e.target.value)
    }}
  />
}


function DisplayAnswers({ answers }) {
  return answers.map((row: string[]) => {
    return (
      <div className={`flex flex-row justify-center}`}>
        <div className={`flex-1 py-1 px-3 truncate`}>{row[1]}</div>
        <div className={`flex-1 py-1 px-3 truncate`}>{row[2]}</div>
        <div className={`flex-1 py-1 px-3 truncate ${row[0]}`}>{row.slice(3,)}</div>
      </div>
  )})
}
