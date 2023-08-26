import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
