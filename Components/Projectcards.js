import {Element} from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import Tqrhero from "../public/images/One.png";
import Bfhero from "../public/images/Two.jpeg";
import Sehero from "../public/images/Three.png";

function Projectcards() {
  return (
      <Element id="Projects" name="Projects">
           <div className="flex-col justify-start text-center mx-5 md:mx-6 lg:mx-8 pt-60 pb-44 space-y-52">

           <div className="flex-col md:flex md:flex-row justify-between md:space-x-7">
                 <div className="w-full md:w-2/3 md:flex-1">
                  <a href="/tapqr"><Image src={Tqrhero} alt="hero" layout="responsive" objectFit="cover" className="p-2 cursor-pointer transition ease-in-out delay-100 hover:scale-105 duration-500"/></a>
                 </div>
                 <div className="md:flex flex-col w-full md:w-1/3 md:ml-6 lg:ml-8 justify-between">   
                   <div className="mt-5 md:mt-0 space-y-4">
                     
                      <a href="/tapqr" className="flex font-normal text-left text-4xl lg:text-5xl cursor-pointer">TapQR</a>
          
                    <div className="w-full border-t border-black border-dotted"></div>
                    <p className="flex mt-0 text-left text-lg lg:text-xl break-normal">Crafting a seamless experience to leverage QR codes, built on the Solana blockchain.</p>
                   </div>
                  <div className="mt-14 md:mt-0 space-y-4">
                   <p className="font-normal text-xs md:text-sm text-left tracking-wider">DESKTOP WEB · MOBILE APP · CASE STUDY</p>
                      <div className="w-full border-t border-black border-dotted"></div>
                  </div>
                </div>
            </div>

            <div className="flex-col md:flex md:flex-row justify-between md:space-x-7">
                 <div className="w-full md:w-2/3 md:flex-1">
                  <a href="/beautyfiles"><Image src={Bfhero} alt="hero" layout="responsive" objectFit="cover" className="p-2 cursor-pointer transition ease-in-out delay-100 hover:scale-105 duration-500"/></a>
                 </div>
                 <div className="md:flex flex-col w-full md:w-1/3 md:ml-6 lg:ml-8 justify-between">   
                   <div className="mt-5 md:mt-0 space-y-4">

                      <a href="/beautyfiles" className="flex font-normal text-left text-4xl lg:text-5xl cursor-pointer">BeautyFiles</a>

                      <div className="w-full border-t border-black border-dotted"></div>
                    <p className="flex mt-0 text-left text-lg lg:text-xl break-normal">Helping beauty professionals better engage clients within a new, digital space.</p>
                   </div>
                  <div className="mt-14 md:mt-0 space-y-4">
                   <p className="font-normal text-xs md:text-sm text-left tracking-wider">MOBILE APP · CASE STUDY</p>
                      <div className="w-full border-t border-black border-dotted"></div>
                  </div>
                </div>
            </div>

            <div className="flex-col md:flex md:flex-row justify-between md:space-x-7">
                 <div className="w-full md:w-2/3 md:flex-1">
                  <a href="/saloneverywhere"><Image src={Sehero} alt="hero" layout="responsive" objectFit="cover" className="p-2 cursor-pointer transition ease-in-out delay-100 hover:scale-105 duration-500"/></a>
                 </div>
                 <div className="md:flex flex-col w-full md:w-1/3 md:ml-6 lg:ml-8 justify-between">   
                   <div className="mt-5 md:mt-0 space-y-4">

                      <a href="/saloneverywhere" className="flex font-normal text-left text-4xl lg:text-5xl cursor-pointer">SalonEverywhere</a>

                      <div className="w-full border-t border-black border-dotted"></div>
                    <p className="flex mt-0 text-left text-lg lg:text-xl break-normal">Redesigning a digital platform for simplicity, exclusively for beauty professionals.</p>
                   </div>
                  <div className="mt-14 md:mt-0 space-y-4">
                   <p className="font-normal text-xs md:text-sm text-left tracking-wider">REDESIGN · RESPONSIVE WEB · CASE STUDY</p>
                      <div className="w-full border-t border-black border-dotted"></div>
                  </div>
                </div>
            </div>

            </div>
      </Element>
  )
}

export default Projectcards