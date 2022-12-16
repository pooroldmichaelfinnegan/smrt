import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState, useRef } from 'react'

const subject = [["i", "jeg"],["you", "du"],["he", "han"],["she", "hun"],["we", "vi"],["you", "i"],["they", "de"]]
const object = [["me", "mig"],["you", "dig"],["him", "ham"],["her", "hende"],["us", "os"],["you", "jer"],["them", "dem"]]

export default function Home() {
  // const inputRef = useRef()

  return (
    <div className="border-2 flex flex-row h-full">
      <div id="sidebar" className="border-2 w-1/3 h-full">
        <Answers array={subject} />
      </div>
      <div className="">
        home<br />
        <Card />
      </div>
    </div>
  )
}

function Card() {
  const [inputField, setInputField] = useState('')

  return <div className="border-2">
    card<br />

    <Input setField={setInputField} /><br />
    {inputField}
  </div>
}

function Input({ setField }) {
  const inputRef = useRef<HTMLInputElement>(null)

  return <input
    className="text-white-900 text-center "
    type="text"
    onChange={(e) => setField(e.target.value)}
  />
}

const answers = [["true", "egg"]]

function Answers({ array }) {
  const a = []

  for (let i = 0; i < array.length; i++) {
    a.push(<div className="flex flex-row justify-center align-center">
        <div className="border-2 w-1/3">{array[i][0]}</div>
        <div className="border-2 w-1/3">{array[i][1]}</div>
      </div>)
  }

  return a
}
