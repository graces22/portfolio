import {Element} from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import Tqrhero from "../public/images/One.png";
import Bfhero from "../public/images/Two.png";
import Sehero from "../public/images/Three.png";

function Projectcards() {
  return (
      <Element id="Projects" name="Projects">
           <div className="flex-col justify-start text-center mx-5 md:mx-6 lg:mx-8 py-44 space-y-40">

           <div className="flex-col justify-start md:space-y-0 space-y-5">
                <div className="w-full h-80 md:h-[34rem] relative px-10 mb-5 shrink-0">
                   <Link href="/tapqr">
                    <Image src={Tqrhero} alt="hero" layout="fill" objectFit="cover" className="p-2 cursor-pointer"/>
                   </Link>
                </div> 
                <div className="flex flex-col w-full"> 
                 <div className="flex flex-row justify-between">    
                 <ul>   
                  <li className="font-normal text-left text-4xl lg:text-5xl">
                  <Link href="/tapqr">
                    <a>TapQR</a>
                  </Link>
                  </li>
                 </ul>
                 <p className="font-normal text-right text-4xl lg:text-5xl">01</p>
                 </div>
                    <div className="py-5">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                 <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Designing a seamless experience to leverage QR codes—built on the Solana blockchain.</p>
                  <div className="mt-10 text-left">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm">DESKTOP WEB · MOBILE APP · UI/UX CASE STUDY</p>
                  </div>
                  <div className="pt-4">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                </div>
                </div>

                <div className="h-full md:h-96 md:flex flex-col md:flex-row justify-start md:space-y-0 space-y-5">
                <div className="w-full md:w-1/2 h-80 md:h-full relative px-10 shrink-0">
                   <Link href="/tapqr">
                    <Image src={Tqrhero} alt="hero" layout="fill" objectFit="cover" className="p-2 cursor-pointer"/>
                   </Link>
                </div> 
                <div className="flex flex-col md:ml-6 lg:ml-8 w-full md:w-1/2"> 
                 <div className="flex flex-row justify-between">    
                 <ul>   
                  <li className="font-normal text-left text-4xl lg:text-5xl">
                  <Link href="/tapqr">
                    <a>TapQR</a>
                  </Link>
                  </li>
                 </ul>
                 <p className="font-normal text-right text-4xl lg:text-5xl">01</p>
                 </div>
                    <div className="py-5">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                 <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Designing a seamless experience to leverage QR codes—built on the Solana blockchain.</p>
                  <div className="mt-10 md:mt-52 lg:mt-48 text-left">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm">DESKTOP WEB · MOBILE APP · UI/UX CASE STUDY</p>
                  </div>
                  <div className="pt-4">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                </div>
                </div>
                <div className="h-full md:h-96 md:flex flex-col md:flex-row justify-start md:space-y-0 space-y-5">
                <div className="w-full md:w-1/2 h-80 md:h-full relative px-10 shrink-0">
                   <Link href="/beautyfiles">
                    <Image src={Bfhero} alt="hero" layout="fill" objectFit="cover" className="p-2 cursor-pointer"/>
                   </Link>
                </div>
                <div className="flex flex-col md:ml-6 lg:ml-8 w-full md:w-1/2"> 
                 <div className="flex flex-row justify-between">    
                 <ul>   
                  <li className="font-normal text-left text-4xl lg:text-5xl">
                  <Link href="/beautyfiles">
                    <a>BeautyFiles</a>
                  </Link>
                  </li>
                 </ul>
                 <p className="font-normal text-right text-4xl lg:text-5xl">02</p>
                 </div>
                    <div className="py-5">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                 <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Helping beauty professionals better engage clients within a new, digital space.</p>
                  <div className="mt-10 md:mt-52 lg:mt-48 text-left">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm">MOBILE APP · UI/UX CASE STUDY</p>
                  </div>
                  <div className="pt-4">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                </div>
                </div>
                <div className="h-full md:h-96 md:flex flex-col md:flex-row justify-start md:space-y-0 space-y-5">
                <div className="w-full md:w-1/2 h-80 md:h-full relative px-10 shrink-0">
                   <Link href="/saloneverywhere">
                    <Image src={Sehero} alt="hero" layout="fill" objectFit="cover" className="p-2 cursor-pointer"/>
                   </Link>
                </div>
                <div className="flex flex-col md:ml-6 lg:ml-8 w-full md:w-1/2"> 
                 <div className="flex flex-row justify-between">    
                 <ul>   
                  <li className="font-normal text-left text-4xl lg:text-5xl">
                  <Link href="/saloneverywhere">
                    <a>SalonEverywhere</a>
                  </Link>
                  </li>
                 </ul>
                 <p className="font-normal text-right text-4xl lg:text-5xl">03</p>
                 </div>
                    <div className="py-5">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                 <p className="flex mt-0 text-left text-xl lg:text-2xl break-normal text-zinc-400">Redesigning a digital platform, exclusively for beauty professionals.</p>
                  <div className="mt-10 md:mt-52 lg:mt-48 text-left">
                   <p className="font-['Maison_Neue'] text-xs md:text-sm">REDESIGN · RESPONSIVE WEB · UI/UX CASE STUDY</p>
                  </div>
                    <div className="pt-4">
                      <div className="w-full border-t border-black border-dotted"></div>
                    </div>
                </div>
                </div>
            </div>
      </Element>
  )
}

export default Projectcards