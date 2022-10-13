import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import {StyleCardWithLink} from "../types/componentTypes"

const StyleCard =  ({
    name,
    desc,
    linkPath,
  }: StyleCardWithLink) => {
    return (
      <section className="flex flex-col  justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
        <h2 className="text-lg text-gray-700">{name}</h2>
        <p className="text-sm text-gray-600">{desc}</p>
        <Link
          className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
          href={linkPath}
        >
          Get to
        </Link>
      </section>
    );
  };
  
export default StyleCard;
