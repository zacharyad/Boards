import React, {useState} from 'react'
import type { NextPage } from "next";
import AuthCard from "../components/AuthCard"
import {supabase} from '../supabaseClient'

const Auth: NextPage = () => {
  const [email, setEmail] = useState("");   
  const [isAnimated, setAnimationPlay] = useState(false)
  const [magicLinkSent, setMagicLinkAsSent] = useState(false)

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      setAnimationPlay(true)
      // supabase auth
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw new Error("Issue logging in / signing up with magic link")
      setMagicLinkAsSent(true)
    } catch (error) {
      console.log("Error: ", error)
    } finally {
      setAnimationPlay(false)
      console.log("Auth Comp: ", "form submitted")
    }
  }

  const onChangeInput = (event: {target: {value: string}}): void => {
    setEmail(event.target.value)
  }

  const animateDuration = () => {
    setAnimationPlay(true)
    setTimeout(() => {
      setAnimationPlay(false)
    }, 1500)
  }

  if(magicLinkSent) return <div>Check out your email to be rerouted to your dashboard</div>


  return (
    <>
      <div className="container mx-auto flex max-h-screen min-h-screen min-w-full flex-col items-center justify-center bg-indigo-100">
        <div className="w-screen p-4 md:w-1/2">
          <section className="flex flex-col justify-center w-full rounded border-2 border-indigo-900 p-6 shadow-xl bg-indigo-50 duration-500">
            <h2 className="text-lg text-gray-900">Login</h2>
            <p className="text-sm text-indigo-900">Magic link Explanation</p>

        
              <div className="p-2"/>
                <label htmlFor="emailInput">Email to get magic link:</label> 
                <div className="p-1"/>
                <form onSubmit={(e) => handleLogin(e)} className="w-full">
                  <input onChange={onChangeInput} value={email}  id="emailInput" type="email" />

                  <div className="p-2" />

                  <button 
                  onAnimationEnd={() => setAnimationPlay(false)} 
                  className={`${isAnimated ? "animate-bounce bg-slate-400 rounded-3xl text-white" : ""} rounded border duration-200 border-black`}>{isAnimated ? <div className="animate-pulse">Loading...</div> : "Login"}</button>
                </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Auth;

