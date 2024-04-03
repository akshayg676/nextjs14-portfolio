import Head from "next/head";
import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Head>
        <title>Akshay G</title>
        <meta name="description" content="Akshay G portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.pathname !== "/404" && <Navbar />}
      {children}
      {router.pathname !== "/404" && <Footer />}
    </div>
  );
};

export default Layout;
