import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "../src/context/lenguageContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [lenguage, setlenguage] = useState("es");
  const changeLenguage = (lenguage) => {
    setlenguage(lenguage);
  };

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
