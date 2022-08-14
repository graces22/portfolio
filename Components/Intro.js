import React from "react";

function Intro() {

  return (
    <div>
      <div className="flex justify-between text-center mx-0 md:mx-2 lg:mx-3 pt-28">
         <div className="flex flex-col md:ml-3 mx-5 mt-0">
             <h1 className="font-normal text-[64px] leading-none md:text-8xl lg:text-9xl text-left mb-5">
                Hi, I'm Grace,<br/>UI/UX designer and front-end rookie.
             </h1>
             <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 mt-5 mb-20 lg:pl-2 md:w-5/6 lg:w-4/6">
                Building digital experiences for startups under Tario Ventures by day, and exploring front end by night—out of curiosity, with an endless drive to learn more about bridging the gap.
             </p1>
         </div>
      </div>
    </div>
  )
}

export default Intro;