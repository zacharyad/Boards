import Link from 'next/link'
import {StyleCardWithLink} from "../types/componentTypes"

const StyleCard =  ({
    name,
    desc,
    linkPath,
    linkText
  }: StyleCardWithLink) => {
 
    return (
      <div  className="p-8 flex justify-center w-screen h-full">
      <section className="bg-indigo-50 flex flex-col w-1/2 items-center rounded border-2 border-indigo-900 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
        <div>
        <h2 className="text-lg text-gray-700">{name}</h2>
        <p className="text-sm text-gray-600">{desc}</p>
        <Link
          className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
          href={linkPath}
        >
          {linkText}
        </Link>
        </div>
      </section>

      </div>
    );
  };
  
export default StyleCard;
