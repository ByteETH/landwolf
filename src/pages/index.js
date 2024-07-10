import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import MainScreen from "../../components/MainScreen";
import FirstSection from "../../components/FirstSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import Footer from "../../components/Footer";
import Buy from "../../components/Buy";
import MatrixBackground from "../../components/AnimatedBg";

export default function Home() {
  return (
    <>
      <Head>
        <title>PIPI | Ethereum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <MatrixBackground />
          <Navbar />
          <MainScreen />
          <FirstSection />
          <SecondSection />
          <Buy />
          <ThirdSection />
          <Footer />
        </main>
      </Layout>

      <style jsx>{`
      main {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          background-color: #4d9440;
        }
      `}</style>
    </>
  );
}