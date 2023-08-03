import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navbar from "../UI/Components/Navbar.js"; // Correct the casing to match the file name
import React from "react"; // Don't forget to import React

function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
