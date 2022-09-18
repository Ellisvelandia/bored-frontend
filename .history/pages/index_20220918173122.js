import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="container max-w-full max-h-full bg-black text-white m-0 p-0">
      <Head>
        <title>Bored Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
