import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SWButton } from '@swanners/core/components';
import services from '@swanners/core/services';

export default function Home() {
  useEffect(() => {
    services.auth().signInWithEmailAndPassword('minhtuan', '123456');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <SWButton title='Click here' onPress={() => console.log('clicked')} />
      </main>
    </div>
  );
}
