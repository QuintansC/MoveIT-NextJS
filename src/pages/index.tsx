import styles from "@/styles/pages/Home.module.css"
import Head from 'next/head';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function Home() {
 

  return (
    <DefaultLayout> 
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
        <section>
          
        </section>
      </div>
    </DefaultLayout>
  )
}
