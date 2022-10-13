import {useState} from 'react'
import type { NextPage } from "next";
import Link from 'next/link'
import AuthCard from "../components/AuthCard"

const Auth: NextPage = () => {
    const [authType, setAuthType] = useState("Login")

  return (
    <>
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <AuthCard name={authType} desc={"Login with a magic link send to you email. You will be redirected to your dashboard."} />
      </section>
    </>
  );
};

export default Auth;