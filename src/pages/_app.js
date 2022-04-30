import "globalStyles.css";
import "App.css";
import "components/CreateEvents.css";
import "components/EmptyEvents.css";
import "components/Events.css";
import "components/Footer.css";
import "components/Header.css";
import "components/HeaderDate.css";
import "components/Info.css";
import "components/InfoDetailEvent.css";
import "components/ListEvents.css";
import "components/Loading.css";
import "components/SignIn.css";
import "components/SignUp.css";

import Head from "next/head";

import Header from "components/Header.js";
import { UserContextProvider } from "context/userContext";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" key="theme" />
      </Head>
      <div className="App">
        <UserContextProvider>
          <Header />
          <Component {...pageProps} />
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
