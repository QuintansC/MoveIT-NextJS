import { CompletedChallenges } from '@/components/CompletedChallenges';
import { Countdown } from '@/components/Countdown';
import {ExperienceBar} from '@/components/ExperienceBar';
import {Profile} from '@/components/Profile';
import styles from "@/styles/pages/Home.module.css"

import Head from 'next/head';
import { ChallengeBox } from '@/components/ChallengeBox';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout> 
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
        <ExperienceBar/>
        <section>
          <div>
            <Profile></Profile>
            <CompletedChallenges></CompletedChallenges>
            <Countdown></Countdown>
          </div>
          <div>
            <ChallengeBox></ChallengeBox>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
