import Link from 'next/link'
import {StyleCardWithLink} from "../types/componentTypes"

const StyleCard =  ({
    name,
    desc,
    linkPath,
    linkText
  }: StyleCardWithLink) => {
 
    return (
      <div  className="p-8 flex justify-center w-screen h-full md:w-2/3">
        <section className="bg-indigo-50 flex flex-col w-full items-start rounded border-2 border-indigo-900 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
          <div>
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600 min-w-full">{desc}</p>
            
            <div className="spacer p-4"/>

            <Link
              className="m-auto mt-3 w-fit text-sm text-indigo-800 underline decoration-dotted underline-offset-2"
              href={linkPath} >
              {linkText}
            </Link>
          </div>
        </section>
      </div>
    );
  };
  
export default StyleCard;
