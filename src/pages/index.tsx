import type { NextPage } from "next";
import Link from 'next/link'
import StyleCard from "../components/StyleCard"
import Layout from "../layout";

const Home: NextPage = () => {
  return (

      <main className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <StyleCard name="Get On Board"  
                  desc="Sign-in or up and get to creating"
                  linkPath="/auth"
                  linkText="Login"/>
      </main>


  );
};

export default Home;
