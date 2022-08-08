import React, {useState} from "react";
import Link from 'next/link';
import {Disclosure} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Disclosure as="nav" className="sticky w-full top-0 z-20 hover:bg-lime-50 active:bg-lime-50">
            {({open}) => (
                <>
                   <div className="min-w-7xl mx-auto px-2 sm:px-3 lg:pl-7 lg:pr-5 active:bg-lime-50">
                       <div className="relative flex items-center justify-between h-12 md:mx-0 mx-0">
                           <div className="absolute inset-y-0 right-0 flex items-center display md:hidden">
                               <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black">
                                   
                                   {open ? (
                                     <XIcon className="block h-6 w-6" aria-hidden="true" />
                                   ) : (
                                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                   )}

                               </Disclosure.Button>

                           </div>
                           <div className="flex-1 flex items-center justify-left ml-3 lg:ml-1 sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                             <ul>
                               <li>
                                  <Link href="/">
                                     <a className="font-regular text-base cursor-pointer">Grace Song</a>
                                  </Link>
                               </li>
                             </ul>
                            </div>
                            <div className="hidden sm:block sm:ml-auto">
                               <div className="flex space-x-4">
                               <ul>   
                               <li>
                                  <Link href="/#Projects">
                                     <a className="cursor-pointer px-2 py-3 text-base font-regular">Projects</a>
                                  </Link>
                               </li>
                               </ul>
                               <ul>
                               <li>
                                  <Link href="/About">
                                     <a className="cursor-pointer px-2 py-3 text-base font-regular">About</a>
                                  </Link>
                               </li>
                               </ul> 
                               <ul>
                               <li>
                                  <a href="https://drive.google.com/file/d/169iDF_zXzqZ84h4SLe15ZEvSK23O4DO4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cursor-pointer px-2 py-3 text-base font-regular">Resume</a>
                               </li>
                               </ul> 
                               </div>
                            </div>
                           </div>
                              
                       </div>

                   </div>
                   <Disclosure.Panel className="md:hidden bg-lime-50">
                     <div className="mx-2 py-8 space-y-1">
                                     <Disclosure.Button>
                                     <ul>   
                               <li>
                                  <Link href="/">
                                     <a className="cursor-pointer block ml-3 py-6 text-5xl text-left font-regular">Projects</a>
                                  </Link>
                               </li>
                               </ul>
                               <ul>
                               <li>
                                  <Link href="/About">
                                     <a className="cursor-pointer block ml-3 py-6 text-5xl text-left font-regular">About</a>
                                  </Link>
                               </li>
                               </ul>
                               <ul>
                               <li>
                                  <a href="https://drive.google.com/file/d/169iDF_zXzqZ84h4SLe15ZEvSK23O4DO4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cursor-pointer block ml-3 py-6 text-5xl text-left font-regular">Resume</a>
                               </li>
                               </ul>  
                                  </Disclosure.Button>
                     </div>
                   </Disclosure.Panel>
                </>
                
            )}
        </Disclosure>
    )
}