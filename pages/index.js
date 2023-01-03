import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Podcast from '../dashboard/PodcatsLinks'
import People from '../dashboard/PeopleLinks'
import Music from '../dashboard/MusicLink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Cav | Linkpears</title>
        <meta name="description" content="Stuff I like. On the Internet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-6'>
        <h1 className='truncate text-2xl font-bold'>🍐Linkpears</h1>
        <span className='truncate text-sm'> Thomas Cavalcante</span>
      </div>

      <div className='px-10 text-center'>
        <p className='text-center italic mx-2 p-2 font-semibold text-gray-400 text-2xl rounded-full'>Stuff I like. <span className='text-gray-300'>On the internet.</span></p>
      </div>
      
      <main className={styles.main}>
        <div className='mb-10'>
          <Podcast/>
          <People/>
          <Music/>
        </div>
      </main>
    </>
  )
}
