import type { NextPage } from "next";
import {useState, useEffect} from 'react'
import Dashboard from "./dashboard"
import StyleCard from "../components/StyleCard"
import { supabase } from "../supabaseClient";

const Home: NextPage = () => {
  const [session, setSession] = useState(null) as any;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  if(session?.user) return (
    <Dashboard />
  )

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
