import type { NextPage } from "next";
import StyleCard from "../components/StyleCard";

const about: NextPage = () => {
  return (
    <>
      <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <StyleCard name="About Section"  
                  desc="This application is set up to do one thing; share an ethereal idea in a concrete place."
                  linkPath="/auth"
                  linkText="Get Started Now!"/>
      </div>
    </>
  );
};

export default about;