import type { NextPage } from "next";
import StyleCard from "../components/StyleCard";


const contact: NextPage = () => {
  return (
    <>
      <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <StyleCard name="Contact"  
                  desc="Have Some Questions or Comments...?"
                  linkPath="mailto: abc@example.com"
                  linkText="Mail Us!"
                />
      </div>
    </>
  );
};

export default contact;