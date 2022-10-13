import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import StyleCard from "../components/StyleCard"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boards</title>
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
       <StyleCard name="Get to Boarding"  description="Sign-in or up and get to creating"
  linkPath="/auth" />
      </main>
    </>
  );
};

export default Home;
