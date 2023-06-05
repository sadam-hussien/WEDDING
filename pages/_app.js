import { useState } from "react";

// import { appWithTranslation } from "next-i18next";

import { QueryClient, QueryClientProvider } from "react-query";

import SSRProvider from "react-bootstrap/SSRProvider";

import Head from "next/head";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "@/store";

// global css
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>تيفرى</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <SSRProvider>
          <Provider store={store}>
            <PersistGate
              loading="loading.................."
              persistor={persistor}
            >
              {getLayout(<Component {...pageProps} />)}
            </PersistGate>
          </Provider>
        </SSRProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

// export default appWithTranslation(MyApp);
