import React from "react";
import {MailIcon} from "@heroicons/react/outline";

function Footer() {
    return (
      <div>
           <div className="flex flex-col mt-24 lg:mt-40 w-100">
                <div class="py-5 md:py-10 mb-1 lg:mb-2 md:mx-8 mx-5">
                   <div class="w-full border-t border-black border-dotted"></div>
                </div>

                <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 mb-4 md:mx-8 mx-5">I'd love to connect, please reach me at:</p1>

                <div class="overflow-hidden h-24 md:h-28 lg:h-40 relative w-screen">
                <div className="animate-marquee hover:pause inline-block whitespace-nowrap absolute">
                  <a href="mailto:gracesong.dzn@gmail.com" className="font-normal text-7xl md:text-8xl lg:text-9xl text-center mb-1 lg:mb-5">gracesong.dzn@gmail.com · </a>
                  <a href="mailto:gracesong.dzn@gmail.com" className="font-normal text-7xl md:text-8xl lg:text-9xl text-center mb-1 lg:mb-5">gracesong.dzn@gmail.com · </a>
                  <a href="mailto:gracesong.dzn@gmail.com" className="font-normal text-7xl md:text-8xl lg:text-9xl text-center mb-1 lg:mb-5">gracesong.dzn@gmail.com · </a>
                  <a href="mailto:gracesong.dzn@gmail.com" className="font-normal text-7xl md:text-8xl lg:text-9xl text-center mb-1 lg:mb-5">gracesong.dzn@gmail.com · </a>
                  <a href="mailto:gracesong.dzn@gmail.com" className="font-normal text-7xl md:text-8xl lg:text-9xl text-center mb-1 lg:mb-5">gracesong.dzn@gmail.com · </a>
                  <a href="mailto:gracesong.dzn@gmail.com" className="font-normal text-7xl md:text-8xl lg:text-9xl text-center mb-1 lg:mb-5">gracesong.dzn@gmail.com · </a>

                </div>
                </div>

                <div class="pt-5 md:pt-10 md:mx-8 mx-5">
                   <div class="w-full border-t border-black border-dotted"></div>
                </div>
                   <div className="space-between flex my-6 md:mx-8 mx-5">
                      <p1 className="font-regular text-sm md:text-base text-left w-full">
                        Designed and built by Grace Song.
                      </p1>
                      <p1 className="font-regular text-sm md:text-base text-right w-1/4">
                        © 2022
                      </p1>
                  </div>
           </div>
      </div>
    )
  }
  
  export default Footer;