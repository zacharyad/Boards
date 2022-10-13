import type { NextPage } from "next";
import StyleCard from "../components/StyleCard"

const Home: NextPage = () => {
  return (
    <main className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
    <StyleCard name="Get On Board"  
              desc="Sign-in or up and get to creating"
              linkPath="/auth"
              linkText="Click this"/>
   </main>

  );
};

export default Home;



