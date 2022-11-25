import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link.js'
import EachPost from '../components/EachPost'
import styles from '../styles/Home.module.css'
import Hero from 'components/hero'

export default function Home() {
  return (
    <>
      <Hero
        title='CUBE'
        subtitle='アウトプットしていくサイト'
        imageOn
      />
    </>
  )
}
