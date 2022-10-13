
import type { NextPage } from "next";
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
            <footer className="flex align-center fixed bottom-0 p-8 bg-indigo-200 min-w-full h-24 ">
                <div className="basis-3/4">LOGO</div>
                <div className="flex basis-1/4 justify-around space-between grow max-w-xs">
                    <p>Copyright 2022</p>
                    <p>About</p>
                    <p>Privacy Policy</p>
                </div>
            </footer>
        );
};

export default Footer;

