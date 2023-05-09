import React, { FC } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord Bot Inviter</title>
        <meta name="description" content="Invite your Discord Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Discord Bot Inviter
        </h1>

        <div className={styles.buttonWrapper}>
          <a href="https://discord.com/api/oauth2/authorize?client_id=1099948197956304986&permissions=0&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer" className={styles.button}>
            Inviter
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Branche AI</p>
      </footer>
    </div>
  );
};

export default Home;
