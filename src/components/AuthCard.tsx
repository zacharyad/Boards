import {useState} from 'react'
import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import {StyleCardWithOutLink} from "../types/componentTypes"

const AuthCard =  ({
    name,
    desc,
    linkPath,
  }: StyleCardWithOutLink) => {

    const [isAnimated, setAnimationPlay] = useState(false)

    return (
      <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl bg-gray-200 duration-500 motion-safe:hover:scale-105">
        <h2 className="text-lg text-gray-700">{name}</h2>
        <p className="text-sm text-gray-600">{desc}</p>
        
          {
            linkPath ? 
            <>
              <Link
              className="m-auto  mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
              href={linkPath}>Go to Link</Link>
            </> :
            <></>
          }
          <div className="p-2"></div>

            <label htmlFor="emailInput">Email to get magic link:</label> 
            <div className="p-1"></div>
            <input  id="emailInput" type="text" />

            <div className="p-2"></div>

          <button onClick={() => setAnimationPlay(true)} onAnimationEnd={() => setAnimationPlay(false)} className={`${isAnimated ? "animate-bounce" : ""} rounded border border-black`}>{name}</button>
      </section>
    );
  };
  
export default AuthCard;
