import { Main } from "next/document";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bored Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header />
     <Main/>
    </div>
  );
}
