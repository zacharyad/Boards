
import type { NextPage } from "next";
import Link from 'next/link'

const Footer = () => {
  return (
            <footer className="flex align-center fixed bottom-0 p-8 bg-indigo-200 min-w-full h-24">
                <div className="basis-2/3  md:order-1">BOARDS LOGO</div>
                
                <div className="flex basis-full justify-between grow min-w-lg md:basis-1/3 md:order-last">
                    <p className="hidden md:flex">Copyright 2022</p>
                    <p className="hidden md:flex">Privacy Policy</p>
                </div>
            </footer>
        );
};

export default Footer;

