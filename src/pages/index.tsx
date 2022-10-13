import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import StyleCard from "../components/StyleCard"
import Layout from "../components/Layout";

const Home: NextPage = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Boards</title>
      </Head>
    
      <main {...pageProps} className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <StyleCard name="Get On Board"  
                  desc="Sign-in or up and get to creating"
                  linkPath="/auth"/>
      </main>
    </Layout> 

  );
};

export default Home;
