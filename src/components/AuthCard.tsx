import {useState} from 'react'
import {StyleCardWithOutLink} from "../types/componentTypes"

const AuthCard =  ({
    name,
    desc,
    linkPath,
  }: StyleCardWithOutLink) => {

    const [isAnimated, setAnimationPlay] = useState(false)

    const animateDuration = (duration: number) => {
      setAnimationPlay(true)
      setTimeout(() => {
        setAnimationPlay(false)
      }, duration)
    }

    return (
      <div className="w-screen p-4 md:w-1/2">
      <section className="flex flex-col justify-center w-full rounded border-2 border-indigo-900 p-6 shadow-xl bg-indigo-50 duration-500">
        <h2 className="text-lg text-gray-900">{name}</h2>
        <p className="text-sm text-indigo-900">{desc}</p>

    
          <div className="p-2"></div>
            <label htmlFor="emailInput">Email to get magic link:</label> 
            <div className="p-1"></div>
            <input  id="emailInput" type="text" />

            <div className="p-2"></div>

          <button onClick={() => animateDuration(500)} onAnimationEnd={() => setAnimationPlay(false)} className={`${isAnimated ? "animate-bounce" : ""} rounded border duration-200 border-black`}>{name}</button>
      </section>
      </div>
    );
  };
  
export default AuthCard;
