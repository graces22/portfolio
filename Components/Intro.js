import React from "react";
import Image from "next/image";

function Intro() {

  return (
    <div>
      <div className="flex justify-between text-center mx-0 md:mx-2 lg:mx-3 pt-28">
         <div className="flex flex-col md:ml-3 mx-5 mt-0">
             <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="font-normal text-7xl md:text-8xl lg:text-9xl text-left mb-5">
                Hi, I'm Grace,<br/>UX designer and front-end rookie.
             </h1>
             <p1 data-aos="fade-in" data-aos-duration="2000" data-aos-once="true" className="font-normal text-xl lg:text-2xl text-left text-zinc-400 mt-5 mb-20 lg:pl-2">
                Currently building digital experiences for emerging startups under Tario Ventures Group.
             </p1>
         </div>
      </div>
    </div>
  )
}

export default Intro;