import {useState} from 'react'
import type { NextPage } from "next";
import Link from 'next/link'

const Navbar: NextPage = () => {
    const [isModal, setModal] = useState(false)

    function toggleModal(){
        isModal ? setModal(!isModal) : setModal(!isModal)
    }
  return (
    <>
        <div onClick={toggleModal} className={`${!isModal ? "hidden" : ""} absolute top-0 left-0 w-full h-full bg-white opacity-80 bg-blur-lg`}></div>

        <nav className={`${isModal ? "pb-48" : ""} flex justify-around drop-shadow-2xl fixed top-0 p-8 bg-indigo-200 min-w-full`}>
            <div className=" justify-around basis-1/4 hidden md:flex">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div onClick={toggleModal} className="flex basis-1/4 md:hidden">
                <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-gray-600"></span>
                    <span className="block w-5 h-0.5 bg-gray-600"></span>
                </div>
                <div className='min-w-max min-h-max bg-white z-2 absolute top-0 right-0'></div>
                <div className={`${isModal ? "flex" : "hidden"} relative top-16 bg-indigo-400 flex-col content-center`}>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

            <div className="flex basis-1/2 justify-center">
                <h1 className="">BOARDS LOGO</h1>
            </div>

            <ul className="flex justify-end basis-1/4">
                <Link href="/auth">Login</Link>
            </ul>
        </nav>
    </>
        );
};

export default Navbar;

