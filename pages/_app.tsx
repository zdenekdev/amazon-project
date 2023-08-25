import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { AppProps } from "next/app";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
