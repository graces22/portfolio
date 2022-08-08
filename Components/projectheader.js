import { projects, projectsList } from '../lib/data';
import { useState, useRef } from 'react';

const Projectheader = (props) => { 
    const { data, children } = props;
    const { title, description, overview, h1, h2, h3, list1, list2, list3, heroimage } = data;
    const [ flowStep, setFlowStep ] = useState(0);
    const flowRef = useRef();

 return (
    <div>
      <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 md:pt-28 pt-28">
         <div className="flex flex-col md:mx-3 mx-5 mt-0">
             <h1 className="font-normal text-[56px] md:text-8xl lg:text-9xl text-left mb-5">
                  {data.title}
             </h1>
               <div className="pt-0 md:pt-4">
                  <div className="w-full border-t border-black border-dotted"></div>
               </div>
               <div className="w-full flex flex-col md:flex-row justify-left md:gap-40 lg:gap-60 items-start">
               <div className='py-6'>
                 <p className='text-lg text-left pb-4'>{h1}</p>
                 <ul className='text-base text-left text-zinc-400'>
                  {list1.map(list1Item => (
                   <li>{list1Item}</li>
                  ))}
                 </ul>
               </div>
               <div className='py-6'>
                 <p className='text-lg text-left pb-4'>{h2}</p>
                 <ul className='text-base text-left text-zinc-400'>
                  {list2.map(list2Item => (
                   <li>{list2Item}</li>
                  ))}
                 </ul>
               </div>
               <div className='py-6'>
                 <p className='text-lg text-left pb-4'>{h3}</p>
                 <ul className='text-base text-left text-zinc-400'>
                  {list3.map(list3Item => (
                   <li>{list3Item}</li>
                  ))}
                 </ul>
               </div>
              </div>
               <div className="pb-4">
                 <div className="w-full border-t border-black border-dotted"></div>
               </div>
                 <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
                    00 — INTRODUCTION
                 </p1>
                 <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
                   {data.description}
                 </p1>
                 <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
                   {data.overview}
                 </p1>
              <div className='w-full mt-10'>
                <img src={data.heroimage}/>
              </div>
         </div>
      </div>
    </div>
)
}

export default Projectheader;