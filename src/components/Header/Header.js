import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../assets/logo.svg"
import { LuMoveRight } from "react-icons/lu";


const Header = () => {
  return (
    <header className='p-4 bg-[#232536] border-b border-b-[#FFFFFF0D]'>
        <div className="container">
            <nav className='h-[80px] flex justify-between items-center'>
                <div>
                    <Link href={"/"}>
                        <Image src={logo} alt={"Logo"}/>
                    </Link>
                </div>
                <div>
                    <ul className='flex items-center gap-8'>
                        <li>
                            <Link href={"/"} className="text-[#FFFFFF] font-semibold">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"service"} className="text-[#FFFFFF] font-semibold">
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link href={"company"} className="text-[#FFFFFF] font-semibold">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link href={"career"} className="text-[#FFFFFF] font-semibold">
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link href={"blog"} className="text-[#FFFFFF] font-semibold">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href={""} className="text-[#FFFFFF] font-semibold">
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link href={""} className="flex items-center gap-1 text-[#FFD3AF]">
                                Clone project <span className='text-[#FFFFFF]'><LuMoveRight/></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    </header>
  )
}

export default Header