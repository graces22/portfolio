import React from "react";

function Intro() {

  return (
    <div>
      <div className="flex flex-col justify-between text-center mx-0 md:mx-2 lg:mx-3 pt-28">
         <div className="md:ml-3 mx-5 mt-0 overflow-hidden h-[5rem] md:h-[6.5rem] lg:h-[8.5rem]">
            <ul className="animate-scrollUp space-y-6 pb-10">
             <li className="flex font-normal text-[64px] md:text-8xl lg:text-9xl text-left">
                Passionate.
             </li>
             <li className="flex font-normal text-[64px] md:text-8xl lg:text-9xl text-left">
                Inquisitive.
             </li>
             <li className="flex font-normal text-[64px] md:text-8xl lg:text-9xl text-left">
                Resilient.
             </li>
             <li className="flex font-normal text-[64px] md:text-8xl lg:text-9xl text-left">
                Thoughtful.
             </li>
             <li className="flex font-normal text-[64px] md:text-8xl lg:text-9xl text-left">
                Collaborative.
             </li>
             
             
            </ul>
             
         </div>
            <p1 className="font-normal text-3xl md:text-4xl text-left pl-5 md:pl-4 pt-10 md:pt-24 md:w-5/6 lg:w-8/12">
              I'm Grace, a product designer who finds pure joy and purpose in crafting valuable experiences.<br/><br/>My most recent work has been envisioning and designing new, digital consumer-facing products for ambitious startups under Tario Ventures.
            </p1>
      </div>
    </div>
  )
}

export default Intro;