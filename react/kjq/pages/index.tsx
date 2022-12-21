import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react'


const subject = [["i", "jeg"],["you", "du"],["he", "han"],["she", "hun"],["we", "vi"],["you", "i"],["they", "de"]]
const object = [["me", "mig"],["you", "dig"],["him", "ham"],["her", "hende"],["us", "os"],["you", "jer"],["them", "dem"]]
const oneToTwenty = [
  ["0", "nul"],
  ["1", "en"],
  ["2", "to"],
  ["3", "tre"],
  ["4", "fire"],
  ["5", "fem"],
  ["6", "seks"],
  ["7", "syv"],
  ["8", "otte"],
  ["9", "ni"],
  ["10", "ti"],
  ["11", "elleve"],
  ["12", "tolv"],
  ["13", "tretten"],
  ["14", "fjorten"],
  ["15", "femten"],
  ["16", "seksten"],
  ["17", "syvten"],
  ["18", "atten"],
  ["19", "nitten"], 
  ["20", "tyve"]
]
const egg = [
  ["hvem", "who"],
  ["hvad", "what"],
  ["hvornår", "when"],
  ["hvor", "where"],
  ["hvorfor", "why"],
  ["hvordan", "how"],
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
const simp = [
  ["altid", "always"],
  ["arbejder", "work"],
  [""],
  ["bare", "just"],
  ["endelig", "finally, eventually"],
  ["hjælpe", "help"],
  ["lidt", "a bit, little"],
  ["lytter", "listen"],
  ["mere", "more"],
  ["nu", "now"],
  ["sang", "song"],
  ["stadig", "still"],
  ["unden", "without"],
  ["undenfor", "outside"],
  ["virker", "functions"],
  ["visninger", "views"],
]

// import måneder_months from "../arrays/måneder__months.json"
// import months_måneder from "../arrays/months__måneder.json"
// import ugens_dage__days_of_the_week from "../arrays/ugens_dage__days_of_the_week.json"
import days_of_the_week__ugens_dage from "../arrays/days_of_the_week__ugens_dage.json"

const arr = days_of_the_week__ugens_dage

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
