import {Element} from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import Tqrhero from "../public/images/One.png";
import Bfhero from "../public/images/Two.jpeg";
import Sehero from "../public/images/Three.jpeg";

function Projectcards() {
  return (
      <Element id="Projects" name="Projects">
           <div className="flex-col justify-start text-center mx-5 md:mx-6 lg:mx-8 py-44 space-y-40">

           <div className="flex-col md:flex md:flex-row justify-between md:space-x-7">
                 <div className="w-full md:w-1/2 md:flex-1">
                  <a href="/tapqr"><Image src={Tqrhero} alt="hero" layout="responsive" objectFit="cover" className="p-2 cursor-pointer"/></a>
                 </div>
                 <div className="md:flex flex-col w-full md:w-1/2 md:ml-6 lg:ml-8 justify-between">   
                   <div className="mt-5 md:mt-0 space-y-4">
                     <div className="flex flex-row justify-between">
                      <a href="/tapqr" className="font-normal text-left text-4xl lg:text-5xl cursor-pointer">TapQR</a>
                      <p className="font-normal text-right text-4xl lg:text-5xl">01</p>
                     </div>
                      <div className="w-full border-t border-black border-dotted"></div>
                    <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Designing a seamless experience to leverage QR codes—built on the Solana blockchain.</p>
                   </div>
                  <div className="mt-14 md:mt-0 space-y-4">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm text-left">DESKTOP WEB · MOBILE APP · UI/UX CASE STUDY</p>
                      <div className="w-full border-t border-black border-dotted"></div>
                  </div>
                </div>
            </div>

            <div className="flex-col md:flex md:flex-row justify-between md:space-x-7">
                 <div className="w-full md:w-1/2 md:flex-1">
                  <a href="/tapqr"><Image src={Bfhero} alt="hero" layout="responsive" objectFit="cover" className="p-2 cursor-pointer"/></a>
                 </div>
                 <div className="md:flex flex-col w-full md:w-1/2 md:ml-6 lg:ml-8 justify-between">   
                   <div className="mt-5 md:mt-0 space-y-4">
                     <div className="flex flex-row justify-between">
                      <a href="/tapqr" className="font-normal text-left text-4xl lg:text-5xl cursor-pointer">BeautyFiles</a>
                      <p className="font-normal text-right text-4xl lg:text-5xl">02</p>
                     </div>
                      <div className="w-full border-t border-black border-dotted"></div>
                    <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Helping beauty professionals better engage clients within a new, digital space.</p>
                   </div>
                  <div className="mt-14 md:mt-0 space-y-4">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm text-left">MOBILE APP · UI/UX CASE STUDY</p>
                      <div className="w-full border-t border-black border-dotted"></div>
                  </div>
                </div>
            </div>

            <div className="flex-col md:flex md:flex-row justify-between md:space-x-7">
                 <div className="w-full md:w-1/2 md:flex-1">
                  <a href="/tapqr"><Image src={Sehero} alt="hero" layout="responsive" objectFit="cover" className="p-2 cursor-pointer"/></a>
                 </div>
                 <div className="md:flex flex-col w-full md:w-1/2 md:ml-6 lg:ml-8 justify-between">   
                   <div className="mt-5 md:mt-0 space-y-4">
                     <div className="flex flex-row justify-between">
                      <a href="/tapqr" className="font-normal text-left text-4xl lg:text-5xl cursor-pointer">SalonEverywhere</a>
                      <p className="font-normal text-right text-4xl lg:text-5xl">03</p>
                     </div>
                      <div className="w-full border-t border-black border-dotted"></div>
                    <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Redesigning a digital platform, exclusively for beauty professionals.</p>
                   </div>
                  <div className="mt-14 md:mt-0 space-y-4">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm text-left">REDESIGN · RESPONSIVE WEB · UI/UX CASE STUDY</p>
                      <div className="w-full border-t border-black border-dotted"></div>
                  </div>
                </div>
            </div>

            </div>
      </Element>
  )
}

export default Projectcards