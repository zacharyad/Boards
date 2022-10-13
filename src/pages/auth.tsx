import {useState} from 'react'
import type { NextPage } from "next";
import AuthCard from "../components/AuthCard"

const Auth: NextPage = () => {
    const [authType] = useState("Login")

  return (
    <>
      <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <AuthCard name={authType} desc={"Login with a magic link send to you email. You will be redirected to your dashboard."} />
      </div>
    </>
  );
};

export default Auth;

