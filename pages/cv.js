import React from "react";
import Head from "next/head";
import NavbarComp from "../src/components/NavbarComp";

const CV = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./logo.ico" />
        <title>Caliche Orozco | CV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarComp />
      <div className="w-100 h-100 position-absolute">
        <object
          data="/CVCaliche.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default CV;
