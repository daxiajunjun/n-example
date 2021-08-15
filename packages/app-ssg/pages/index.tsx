import type { NextPage } from 'next'
import React from 'react'
import Home from '../src/views/home'
import styles from '../styles/Home.module.css'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  )
}

export default Index
