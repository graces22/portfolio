import Head from "next/head";
import Link from 'next/link';
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Projects from "../lib/data";
import Projectheader from "../Components/projectheader";
import { useState, useRef } from 'react';
import Image from "next/image";
import Bizheader from "../public/images/Biz.png";
import Proheader from "../public/images/Pro.png";
import Sesketches from "../public/images/se-sketches.png";
import Seflowmap from "../public/images/se-flowmap.png";
import Secomponents from "../public/images/se-components.png";
import Sedesktop from "../public/images/se-desktop.gif";
import Semobile from "../public/images/se-mobile.gif";
import Sepages from "../public/images/se-pages.png";
import Semodals from "../public/images/se-modals.png";

export default function saloneverywhere() {
    const data = Projects.saloneverywhere;
    const { title, description, overview, brief, heroimage } = Projects.saloneverywhere;

  return (
    <div>
      <Head>
        <title>Grace Song | SalonEverywhere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicongs.svg" />
      </Head>

      <Navbar />
     <Projectheader data={Projects.saloneverywhere}>
     </Projectheader>
     <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 mt-10 md:mt-20">
       <div className="flex flex-col md:ml-3 mx-5 mt-0">
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           01 / THE PROBLEM
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           First analyzing the current experience of SalonEverywhere was critical in determining the pain points and general challenges that persisted for existing users.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           SalonEverywhere strives to provide a digital outlet, in which businesses and their pros can present what they offer through a professional profile that can ultimately be a website, resume and portfolio altogether. Overall, we found that the biggest issue from a user perspective was that it lacked a sense of structure, making it difficult to find relevant information and navigate through profiles. In many ways, it did not follow a solid design system, resulting in lower engagement from both the pro and client side.
         </p1>
       </div>
      </div>
      <div className="w-full px-0 md:px-3 lg:px-5 py-10 lg:py-16 my-10 lg:my-20 bg-lime-50">
        <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2  mx-5 md:mx-3 md:w-5/6 lg:w-4/6">
          THE DESIGN CHALLENGE
        </p1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-left my-2 md:my-5 mx-5 md:mx-3 md:w-5/6 lg:w-4/6 text-black">How might we engage new and existing users to gain leverage on networking and local discovery through providing a foolproof platform with a visual tone that speaks to the beauty industry?</h1>
      </div>
      <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 mt-10 lg:mt-20">
       <div className="flex flex-col md:mx-3 mx-5 mt-10 md:mt-20">
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-10 mb-2 md:w-5/6 lg:w-4/6">
           02 / ANALYSIS
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           It was important to make design changes based on these findings to create a seamless user experience, especially for responsive web.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           A pro profile consisted of various sections, however it lacked an interactive approach as it did not provide clients with essential call-to-action links, for instance, a very critical booking link. Based on interviews, beauty pros along with clients emphasized the importance of being able to conveniently find relevant info on a single page.
         </p1>
         <div className="my-5">
          <Image src={Proheader} alt="pro-profile" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Similarly, a business profile lacked necessary elements to drive new bookings and ultimately grow their business. It was apparent that the typography did not perform well within this layout due to a line length that was not optimal for readability, along with an empty column below the side navigation being a poor use of real estate. In terms of mobile view, it did not conform to a responsive design system, with inconsistencies in text alignment and discordant design patterns seen within various sections.
         </p1>
         <div className="my-5 mb-10 md:mb-20">
          <Image src={Bizheader} alt="biz-profile" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           03 / IDEATION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           Exploring the current elements and potential features of a pro and business profile was a critical step in beginning the design process.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           An underlying concept behind SalonEverywhere is to provide a seamless integration between businesses and their pros, in which all the pros associated with said business can be discovered and presented within a single business profile, and vice versa. A site-map was sketched out to clearly visualize main pages of the platform, and how they could be integrated to create a seamless flow.<br/><br/>We explored various features, elements and design patterns to create a more valuable, user-friendly experience—optimizing the initial design system all while maintaining existing brand guidelines. Some ideation questions were:
         </p1>
         <div className="flex flex-row mt-5 mb-20 ">
         <div className="pr-4 lg:pr-6">
           <div className="h-full border-l-[10px] lg:border-l-[12px] border-lime-100 border-solid"></div>
         </div>
         <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 md:w-5/6 lg:w-4/6">
           How might we improve SalonEverywhere's design system to effectively showcase portfolios, expertise and personality unique to every beauty pro?<br/><br/>How might we enforce a seamless navigation between associated pro and business profiles?<br/><br/>How might we help drive engagement through professional profiles, in a more interactive and effective way?
         </p1>
         </div>
             
         <div>
          <Image src={Sesketches} alt="sketches" layout="responsive" objectFit="cover"/>
         </div>
         <div className="my-5 mb-10 md:mb-20">
          <Image src={Seflowmap} alt="flowmap" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           04 / PROPOSED SOLUTIONS
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           From thoughtful exploration and iteration, various solutions have been proposed in delivering a richer experience.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           With a clear purpose in providing an essential CTA area, we justified that replacing the side navigation with this area that is fixed on scroll would allow potential clients to immediately and constantly gain access to relevant information. As a result, a horizontal scrollable tab would take up less space while still providing convenient navigation in both desktop and mobile.<br/><br/>Another proposal was to simply reduce the amount of text, in which it did not resonate with the concept of a visual profile, ultimately reducing the level of engagement. In addition, the idea of implementing endorsements to skills became relevant, as it allowed a source of validation, yet still refrained from the controversial element of a review system; thus providing a potential solution that would meet the needs of both pros and clients.<br/><br/>In valuing the importance of a good design system, we focused on usability and maintenance while building upon existing brand guidelines, which was important to develop early on especially when considering scalability and future implementation. Through implementing these components across the platform, it would also set the visual tone and reinforce overall brand consistency.
         </p1>
         <div className="my-5 mb-10 md:mb-20">
          <Image src={Secomponents} alt="designsystem" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           05 / FINAL OUTCOME
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           A thoughtfully refined design system and a value for consistency enhances the overall experience on SalonEverywhere.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Through creating a coherent design system, exploring potential features and iterating with a functional approach, we were able to strengthen the quality of the product in ways that effectively met user goals. Although this is an ongoing project with many features that were considered however not yet implemented, the redesign was a first important step in moving forward for development and gaining more insightful user feedback.
         </p1>
         <div className="mt-5 mb-20">
          <Image src={Sedesktop} alt="desktop" layout="responsive" objectFit="cover"/>
         </div>
         <div className="md:flex flex-col md:flex-row justify-start items-start items-center md:space-y-0 space-y-5">
           <div className="w-full md:w-1/2 relative shrink-0">
            <Image src={Semobile} alt="mobile" layout="responsive" objectFit="cover"/>
           </div>
           <div className="flex flex-col justify-between lg:mr-20">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               Integrating a seamless flow to navigate through associated profiles.  
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               Knowing the importance of responsive web design, providing a corresponding experience in mobile view was critical. While maintaining consistency in typographic layout, hierarchy, iconography and brand colours, we also focused on presenting sections in the same design patterns to provide familiarity and ease.
             </p1>
           </div>
           </div>
           <div className="my-5 md:mt-20 md:mb-10">
            <Image src={Sepages} alt="pages" layout="responsive" objectFit="cover"/>
           </div>
           <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
             Developing and optimizing an end-to-end experience from a user perspective.
           </p1>
           <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
             Like most other platforms that embody user profiles, SalonEverywhere follows a familiar architecture encompassing both a user edit view and a public view. While designing for simplicity and clarity, some areas have been accommodated to meet developers' requests, having an effect on the design decisions made.<br/><br/>The edit modals are designed for users to easily edit the information presented on their profiles, all while adhering to defined design patterns and components. We focused on creating a frictionless experience through consistency in clear headings, subheadings and concise copy to efficiently guide a user through the process.<br/><br/>Due to the scope of the project, not all screens have been presented, however a business profile along with the respective edit modals would follow a similar structure as seen here.
           </p1>
           <div className="my-5 mb-10 md:mb-20">
            <Image src={Semodals} alt="modals" layout="responsive" objectFit="cover"/>
           </div>
           <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
             06 / REFLECTION
           </p1>
           <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
             Delivering the best possible outcome while designing within boundaries emphasized the value of internal communication, even within a very small team.
           </p1>
           <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
             With early and frequent communication to really streamline the workflow, every decision made was discussed thoroughly and rationally, in which we prioritized design for development as working within time was critical in a startup environment. Making optimal design decisions to support requests by our developing team meant working within boundaries and some limitations, however this ensured the process of invariably delivering the best.<br/><br/>As SalonEverywhere is an ongoing project, many areas of the platform are still under development including the landing page, onboarding flow, claiming or creating a business flow, local search engine and the implementation of new features just to name a few. Nonetheless, a first pass of redesigning what mainly consisted of SalonEverywhere was a significant milestone in bettering the current experience for existing users.
           </p1>
       </div>
      </div>
      <Footer />
    </div>
  );
}