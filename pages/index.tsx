import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon project</title>
        <meta name="description" content="Amazon project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
    </div>
  );
}
