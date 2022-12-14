import Head from "next/head";
import styles from "../styles/Home.module.css";
import tw from "tailwindcss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bored Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
