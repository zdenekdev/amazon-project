import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon project</title>
        <meta name="description" content="Amazon project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-red-400">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
}
