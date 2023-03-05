import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Welcome from '@component/components/welcome/Welcome'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Annotation Project</title>
        <meta name="description" content="Annotation Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Welcome />
        {/* <Instructions /> */}
        {/* <Text /> */}
        {/* <Levels /> */}
        {/* <TextWithAnnotations /> */}
      </main>
    </>
  )
}
