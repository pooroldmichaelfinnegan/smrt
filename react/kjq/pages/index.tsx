import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { useState, useRef } from 'react'

export default function Home() {
  // const inputRef = useRef()

  return (
    <div className={styles.container}>
      Home<br />
      <Card />
    </div>
  )
}

function Card() {
  const [inputField, setInputField] = useState('> default <')

  console.log({ setInputField })

  return <div className={styles.card}>
    Card<br />
    <Input field={inputField} setField={setInputField} /><br />
    {inputField}
  </div>
}

function Input({ field, setField }) {
  const inputRef = useRef<HTMLInputElement>(null)

  return <input
    className="text-red-900 text-center "
    type="text"
    ref={inputRef}
    onChange={() => setField(inputRef.current.value)}
  />
}
