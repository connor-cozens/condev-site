import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-30 border-b border-gray-300 bg-gradient-to-b from-emerald-500  pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-emerald-800/30 sticky top-0">
            <div className="container justify-center mx-auto px-4 h-full">
                <Link href={"/"}>
                    <p className="left-0 top-0 hover:text-emerald-500 font-mono font-bold flex w-full justify-center">
                        condev
                    </p>
                </Link>
            </div>
            <div className="container mx-auto px-4 h-full">
                <ul className="flex justify-between items-center h-full">
                    <li className="hover:text-emerald-500">
                        <Link href="/about">
                            <p>about me</p>
                        </Link>
                    </li>
                    <li className="hover:text-emerald-500">
                        <Link href={"/projects"}>
                            <p>projects</p>
                        </Link>
                    </li>
                    <li className="hover:text-emerald-500">
                        <Link href={"/contact"}>
                            <p>contact</p>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;