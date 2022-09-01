import { NextPage } from "next";
import Head from "next/head";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import Sections from "../components/home/Sections";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-[100vh] bg-lightBlue relative">
        <Head>
          <title>fightSquare</title>
          <link rel="icon" href="/brandLogo.svg" />
        </Head>
        <Header />
        <HeroSection />
        <Features />
        <Sections />
        <Footer />
      </div>
    </>
  );
};

export default Home;
