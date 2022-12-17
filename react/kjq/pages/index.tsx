import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState, useRef } from 'react'

const subject = [["i", "jeg"],["you", "du"],["he", "han"],["she", "hun"],["we", "vi"],["you", "i"],["they", "de"]]
const object = [["me", "mig"],["you", "dig"],["him", "ham"],["her", "hende"],["us", "os"],["you", "jer"],["them", "dem"]]
const one2twenty = [["0", "nul"], ["1", "en"], ["2", "to"], ["3", "tre"], ["4", "fire"], ["5", "fem"], ["6", "seks"], ["7", "syv"], ["8", "otte"], ["9", "ni"], ["10", "ti"], ["11", "elleve"], ["12", "tolv"], ["13", "tretten"], ["14", "fjorten"], ["15", "femten"], ["16", "seksten"], ["17", "syvten"], ["18", "atten"], ["19", "nitten"], ["20", "tyve"]]

export default function Home() {
  const [answers, setAnswers] = useState([])
  const [word, setWord] = useState("default")
  const [inputField, setInputField] = useState('')

  return (
    <div className="border-2 flex flex-row h-full">
      <div id="sidebar" className="border-2 w-1/3 h-full">
        <DisplayAnswers answers={answers} />
      </div>
      <div className="">
        {/* <Card answers={answers} setAnswers={setAnswers} /> */}
        <Input inputField={inputField} setInputField={setInputField} answers={answers} setAnswers={setAnswers} />
      </div>
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

function Input({ inputField, setInputField, answers, setAnswers }) {
  const handleAnswerChange = ( event ) => {
    // console.log(`${event.key}`)
    switch( event.key ) {
      case 'Enter':
        if ( inputField ) {
          setInputField('')
          setAnswers([ ...answers, [ "", inputField ]])
        }
    }

  }

  return <input
    className="text-white-900 text-center border-solid border-2 border-red-900 focus:border-sky-900 "
    type="text"
    onKeyDown={handleAnswerChange}
    value={inputField}
    onChange={(e) => {
      setInputField(e.target.value)
      // console.log(answers)
    }}
  />
}

function DisplayAnswers({ answers }) {
  const a = []

  for (let i = 0; i < answers.length; i++) {
    a.push(
      <div className="flex flex-row justify-center align-center">
        <div className="border-2 w-1/3 p-1 truncate">{answers[i][0]}</div>
        <div className="border-2 w-1/3 p-1 truncate">{answers[i][1]}</div>
      </div>
    )
  }

  return a
}
