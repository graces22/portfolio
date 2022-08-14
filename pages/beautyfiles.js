import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Projects from "../lib/data";
import Projectheader from "../Components/projectheader";
import Image from "next/image";
import Bfhero from "../public/images/Two.jpeg";
import Bfintro from "../public/images/bf-intro.jpg";
import Bfresearch from "../public/images/bf-research.jpg";
import Propersona from "../public/images/bf-propersona.png";
import Clientpersona from "../public/images/bf-clientpersona.png";
import Bfideation from "../public/images/bf-ideation.jpg";
import Bfflowmap from "../public/images/bf-flowmap.png";
import Wireframe1 from "../public/images/bf-wireframe1.png";
import Wireframe2 from "../public/images/bf-wireframe2.png";
import Bfiterations from "../public/images/bf-iterations.png";
import Bfhifipro from "../public/images/bf-hifipro.png";
import Bfhificlient from "../public/images/bf-hificlient.png";
import Finalpro from "../public/images/bf-finalpro.png";
import Finalclient from "../public/images/bf-finalclient.png";
import Bfgif1 from "../public/images/bf-gif1.gif";
import Bfgif2 from "../public/images/bf-gif2.gif";
import Bfgif3 from "../public/images/bf-gif3.gif";
import Bfgif4 from "../public/images/bf-gif4.gif";

export default function beautyfiles() {
    const data = Projects.beautyfiles;
    const { title, description, overview, brief, heroimage } = Projects.beautyfiles;

  return (
    <div>
      <Head>
        <title>Grace Song | BeautyFiles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicongs.svg" />
      </Head>

      <Navbar />
     <Projectheader data={Projects.beautyfiles}>
     </Projectheader>
     <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 mt-5 md:mt-10">
       <div className="flex flex-col md:ml-3 mx-5 mt-0">
         <div className="mb-20">
          <Image src={Bfhero} alt="solution" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           01 / THE PROBLEM
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           While beauty pros do everything in their power to engage clients and grow their business, they have few ways to currently do so using SalonEverywhere’s digital platform.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           The underlying problem concerns SalonEverywhere facing a complex challenge as a startup. What was first envisioned to be an online network that would initially drive monetization, became challenging without a valuable reason for early users to join. Although there is value in a professional profile on SalonEverywhere, we discovered early in the process that this falls into the concept of “set it and forget it,” resulting in low engagement as users rarely used the platform once their profile was set.
         </p1>
       </div>
      </div>
      <div className="w-full px-0 md:px-3 lg:px-5 py-10 lg:py-16 my-10 lg:my-20 bg-lime-50">
        <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2  mx-5 md:mx-3 md:w-5/6 lg:w-4/6">
           THE DESIGN CHALLENGE
        </p1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-left my-2 md:my-5 mx-5 md:mx-3 md:w-5/6 lg:w-4/6 text-black">How might we enhance SalonEverywhere to increase customer demand through providing fundamental value in growing their business in unconventional ways?</h1>
      </div>
      <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 mt-10 lg:mt-20">
       <div className="flex flex-col md:mx-3 mx-5 mt-10 md:mt-20">
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-10 mb-2 md:w-5/6 lg:w-4/6">
           02 / THE SOLUTION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           The BeautyFiles app provides a new digital system, empowering beauty pros to better engage clients on a more personal level.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           An extension to SalonEverywhere—designed to be a simple yet powerful tool in which beauty pros can create and share follow-up content with clients. Including features like product recommendations and secure image permissions, BeautyFiles is a new approach in providing a digital space for pros to fulfill essential business goals in ways that were not feasible. It is also intended to add great value for potential clients by enhancing the post-service experience in several ways.<br/><br/>The project was assigned with a clear purpose that it would be a mobile app due to the fact that most pros spend their days at work—only having access to their smartphones. In order to engage users on a daily basis, the idea of being able to “own the phone” became relevant in defining the scope of this project.
         </p1>
         <div className="my-5">
          <Image src={Bfintro} alt="mockup" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-40 mb-2 md:w-5/6 lg:w-4/6">
           03 / USER RESEARCH
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           First steps in approaching the problem was to get insight on what beauty pros currently find valuable and challenging in growing their business.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Through interviewing a hair salon, we focussed on questioning the process of a typical pro-to-client interaction to learn about any habits, concerns or hindrances throughout the beauty service experience. This encompasses a critical area of understanding the challenges they faced with the current ways of achieving business goals, whether that be in-person or online. Some relevant findings include:
         </p1>

         <div className="flex flex-row mt-5 mb-20 ">
         <div className="pr-4 lg:pr-6">
           <div className="h-full border-l-[10px] lg:border-l-[12px] border-lime-100 border-solid"></div>
         </div>
         <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 md:w-5/6 lg:w-4/6">
         “A big portion of our business relies on selling retail products, but it is the most challenging part as we know clients are already spending a significant amount on the services we provide.”<br/><br/>“When a client seems interested but does not end up purchasing, we would write the exact name of the product and our website on paper, for their reference to shop online.”<br/><br/>“Posting before and after images is an important way of promoting our services, but we’re often unsure about whether a client has allowed permission to post images of them on social media.”
         </p1>
         </div>
         <div>
          <Image src={Bfresearch} alt="research" layout="responsive" objectFit="cover"/>
         </div>

         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
          Based on relevant findings from a pro’s perspective, we asked questions accordingly and discovered some commonalities along with other needs that persisted from a client’s point of view:
         </p1>
         <div className="flex flex-row mt-5 mb-32 ">
         <div className="pr-4 lg:pr-6">
           <div className="h-full border-l-[10px] lg:border-l-[12px] border-lime-100 border-solid"></div>
         </div>
         <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 md:w-5/6 lg:w-4/6">
           “I do want product recommendations, but I feel pressured to buy on the spot without doing my research on the product, and the time to decide if it’s worth the financial investment.”<br/><br/>“It’s hard to keep track of physical coupons/vouchers that I receive, along with remembering the exact hair color formula that my stylist often writes for me on paper.”<br/><br/>“Sometimes I feel insecure about seeing, in my opinion, unpleasant images of my face being posted by the salon. I thought they were only asking to take photos for their reference, rather than for posting on social media.”
         </p1>
         </div>
         
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           From further research, we better understood the issues that pros and clients faced, and how the product could serve as a tangible solution.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Knowing that the product would serve both beauty pros and clients, user personas are established for guidance and a practical sense of who we're designing for. To better understand how we want the product to achieve user needs, some questions were:
         </p1>
         <div className="flex flex-row mt-5 mb-20 ">
         <div className="pr-4 lg:pr-6">
           <div className="h-full border-l-[10px] lg:border-l-[12px] border-lime-100 border-solid"></div>
         </div>
         <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 md:w-5/6 lg:w-4/6">
           How might we help beauty pros meet their business goals through better client engagement?<br/><br/>How might we improve the post-service experience for both beauty pros and their clients within a digital space?<br/><br/>How might we design a product that is user-friendly, professional and effective to beauty pros?
         </p1>
         </div>
              
         <div className="flex-col md:flex md:flex-row justify-start items-start items-center md:space-y-0 space-y-2">  
         <div className="w-full md:w-1/2 relative shrink-0">
          <Image src={Propersona} alt="Pro-persona" layout="responsive" objectFit="cover"/>
         </div>
         <div className="w-full md:w-1/2 relative shrink-0">
          <Image src={Clientpersona} alt="client-persona" layout="responsive" objectFit="cover"/>
         </div>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-40 mb-2 md:w-5/6 lg:w-4/6">
           04 / IDEATION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           From relevant research and analysis, it was clear that beauty pros needed a new way to grow their business with a digital approach.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Unlike social media marketing, building a system to connect beauty pros and their clients on a more personal level while still maintaining a professional form of communication became an ideal solution. While keeping relevant questions in mind, the process began with brainstorming potential features that would solve these challenges, and transitioned into sketches of how the product could initially take form.<br/><br/>It was necessary to introduce an app that was innovative yet rather familiar, in order to prevent major obstacles in users trying to learn and adopt a new system. Drawing inspiration from digital communication today (text messaging, email, etc.) allowed us to build upon an approachable structure of the app.
         </p1>
         <div className="my-5 mb-10 md:mb-20">
          <Image src={Bfideation} alt="Ideation" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           05 / USER FLOWS
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           Designing a product that serves two distinct user groups, in which beauty pros create files, and clients simply receive.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           After exploring how to simplify the product by only extracting core features, user flows were mapped out to provide clarity on how to design a cohesive user experience across all touchpoints. It further allowed the development of designing specific flows that ensured beauty pros a seamless process to create files, along with steps for a client to receive and perform necessary actions.
         </p1>
         <div className="mt-5 mb-20">
          <Image src={Bfflowmap} alt="flowmap" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           06 / WIREFRAMES
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           This stage allowed for an early visual analysis in opportunities for improvement—focusing on user flows, complexity of features, and a scope for development.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           We determined that a simple client onboarding secured by a mobile number and 2FA would be sufficient for new users to easily get started, and for returning users to easily sign in. Pros would sign in with their SalonEverywhere credentials, or be redirected to the web-based platform to register.<br/><br/>First, considering and focusing efforts on designing for beauty pros was relevant, in which the client-facing app would follow the nature of what is thoughtfully intended. Determining the sections of what a file consisted of, along with the process of creating a file was the primary challenge, all while ensuring clarity, simplicity and functionality.
         </p1>
         <div>
          <Image src={Wireframe1} alt="wireframes" layout="responsive" objectFit="cover"/>
         </div>
         <div className="my-5 mb-10 md:mb-20">
          <Image src={Wireframe2} alt="wireframes" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           07 / FEEDBACK AND ITERATION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           A first pass of review and feedback informed the process of exploration for optimal solutions.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Based on feedback from SalonEverywhere users and our internal team, we found that although the potential features were engaging, it was also overwhelming due to the number of sections that made up a single file. Additional feedback from developers advised necessary adjustments that would optimize initial screen loading times.<br/><br/>The takeaway was that in order for this app to be approachable, creating a file should be a simple process, allowing users to instantly and constantly send out to clients throughout their busy, working days. Overall, we were able to gain unique insights on the reality of where this product would live, to further explore how it may better suit their needs.
         </p1>
         <div>
          <Image src={Bfiterations} alt="iteration" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-40 mb-2 md:w-5/6 lg:w-4/6">
           08 / HIGH-FIDELITY PROTOTYPES
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           To test usability, hi-fi prototypes are presented, iterating upon critical feedback.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Through testing with an existing hair salon, we discovered that stylists took longer than expected to complete the flow of creating a file. We soon realized that keeping all sections open for the user was more effective than the accordion, to quickly scan the entire file with less taps to navigate between sections. In addition, the ability to preview a file before sending was favourable, along with reducing the need to type in text fields.<br/><br/>Accommodating this with simple multi-select options was an apparent solution, as the content provided in the app is powered by what users have configured on their SalonEverywhere profiles. The seamless integration allows users to easily select from their skills, services, products and relevant links, rather than having to manually input text.
         </p1>
         <div>
          <Image src={Bfhifipro} alt="hifi-pro" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           As for the client-facing app, it consists of all the same features of a pro's view, simply without the ability to create a file. Moving forward, the bottom navigation for both the pro and client-facing app are unified upon developers' request, in which the primary action is now represented as a floating action button. This allows the initial bottom nav to remain the same in any view, regardless.
         </p1>
         <div>
          <Image src={Bfhificlient} alt="hifi-client" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-40 mb-2 md:w-5/6 lg:w-4/6">
           09 / FINAL OUTCOME
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           The BeautyFiles app, for pros.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Through exploration and iteration, the BeautyFiles app is a new digital approach to help beauty pros better engage clients and ultimately grow their business. Unlike the conventional post-service procedures that are often time-consuming and high-pressure, beauty pros can now easily create and send personalized follow-up content to clients through the BeautyFiles app designed to meet their needs in various ways.
         </p1>
         <div className="mb-10 md:mb-20">
          <Image src={Finalpro} alt="final-pro" layout="responsive" objectFit="cover"/>
         </div>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           The BeautyFiles app, for clients.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           A digital tool to help clients manage all their bookings in one place, so they never forget their favourite looks received in the past. The app is able to seamlessly enhance current ways of client engagement, ultimately elevating the post-service experience. Rest assured, clients now have full control and confidence over images taken of them, with a valid method of granting or denying permission for public use.
         </p1>
         <div className="mb-10 md:mb-20">
          <Image src={Finalclient} alt="final-client" layout="responsive" objectFit="cover"/>
         </div>
         <div className="md:flex flex-col md:flex-row justify-start items-start items-center md:space-y-0 space-y-5 my-20">
           <div className="w-full md:w-1/2 relative shrink-0 mb-5 md:mb-0">
            <Image src={Bfgif1} alt="gif1" layout="responsive" objectFit="cover"/>
           </div>
           <div className="flex flex-col justify-between lg:mr-20">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               Effortless client onboarding.
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               A quick onboarding flow for first time users to easily create a client account and get started with BeautyFiles. Returning clients simply sign in with mobile verification, and pros with their SalonEverywhere credentials.
             </p1>
           </div>
         </div>
         <div className="flex flex-col-reverse md:flex-row justify-start items-start items-center md:space-y-0 space-y-5 my-20">
           <div className="flex flex-col justify-between lg:ml-20 mt-5 md:mt-0">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               Pros seamlessly create files.
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               Creating a file is designed for simplicity, ensuring that every section is prominent and conceivable at a glance. Multi-select options powered by the content on their SalonEverywhere profiles improve efficiency in creating a file quickly and effectively.
             </p1>
           </div>
             <div className="w-full md:w-1/2 relative shrink-0">
               <Image src={Bfgif2} alt="gif2" layout="responsive" objectFit="cover"/>
             </div>
         </div>
         <div className="md:flex flex-col md:flex-row justify-start items-start items-center md:space-y-0 space-y-5 my-20">
           <div className="w-full md:w-1/2 relative shrink-0 mb-5 md:mb-0">
            <Image src={Bfgif3} alt="gif3" layout="responsive" objectFit="cover"/>
           </div>
           <div className="flex flex-col justify-between lg:mr-20">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               Notifications for BeautyFiles interactions.
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               Get notified and track all actions made on shared files with ease, including immediate updates on newly received files and image permission statuses.
             </p1>
           </div>
         </div>
         <div className="flex flex-col-reverse md:flex-row justify-start items-start items-center md:space-y-0 space-y-5 my-20">
           <div className="flex flex-col justify-between lg:ml-20 mt-5 md:mt-0">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               Delightful client engagement.
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               The interactive feature of a file provides a convenient method of communication between pros and clients, all while enforcing professionalism due to the formal yet pleasant nature of the app.
             </p1>
           </div>
             <div className="w-full md:w-1/2 relative shrink-0">
               <Image src={Bfgif4} alt="gif4" layout="responsive" objectFit="cover"/>
             </div>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           10 / REFLECTION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           With great feedback, there are always endless opportunities for improvement, which in our case can be more approachable and adoptable.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           In retrospect, there were many aspects of the product that we had initially envisioned, however was not implemented due to focussing on core functionality in building MVP. It was critical to see how our initial users reacted to the product early on, in which it would determine the next steps for further development.<br/><br/>We quickly discovered that the product had great potential to be valued in the market, however was a “very new concept” that would take time and effort to be adopted by beauty pros today. Another obstacle could be that clients may not be willing to download an entirely new app regardless, in which they would need a greater purpose.<br/><br/>In all, this was an incredible project to take part in, especially in terms of designing a new product that had the potential to solve major challenges that pros faced today, along with tackling a larger business problem within SalonEverywhere.
         </p1>
       </div>
      </div>
      <Footer />
     </div>
  );
}